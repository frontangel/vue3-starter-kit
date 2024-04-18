import axios, { AxiosResponse } from 'axios'
import useMock from '~/api/mock/adapter.mock.ts'
import { useEventBus, useLocalStorage } from '@vueuse/core'
import { INotificationOptions } from '~/interfaces/notification.interface.ts'
import { shallowRef } from 'vue'

const notificationsBus = useEventBus<string>('notification')
const refreshToken = shallowRef(useLocalStorage('refreshToken', ''))
const accessToken = shallowRef(useLocalStorage('accessToken', ''))
const isRefreshed = shallowRef(false)

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

apiInstance.interceptors.request.use(
  config=> {
    const { url } = config

    const authPaths = ['/auth/login', '/auth/refresh']
    if (!authPaths.some(path => (url as string).includes(path))) {
      config.headers.Authorization = `Bearer ${accessToken.value}`
    }

    return config
  },
  error => {
    return Promise.reject(error);
  }
)

apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    isRefreshed.value = false
    return response.data as any
  },
  async (error) => {

    const originalRequest = error.config

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (!isRefreshed.value) {
        isRefreshed.value = true
        originalRequest._retry = true;
        try {
          const response = await axios.post(`${import.meta.env.VITE_APP_API_URL}/auth/refresh`, { refreshToken: refreshToken.value })
          accessToken.value = response.data.accessToken
          originalRequest.headers['Authorization'] = `Bearer ${accessToken.value}`;
          isRefreshed.value = true;
          return apiInstance(originalRequest);
        } catch (refreshError) {
          isRefreshed.value = false;
          refreshToken.value = ''
          accessToken.value = ''
          window.location.reload()
          return Promise.reject(error.response.data as any)
        }
      }
    }

    const message = error.response.data.message
    if (message) {
      notificationsBus.emit('notify', { message, variant: 'danger', delay: 4000 } as INotificationOptions)
    }

    return Promise.reject(error);
  }
);


useMock(apiInstance)
export default apiInstance
