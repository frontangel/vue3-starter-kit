import axios, { AxiosResponse } from 'axios'
import useMock from '~/mock/adapter.mock.ts'
import { useEventBus } from '@vueuse/core'
import { INotificationOptions } from '~/interfaces/notification.interface.ts'

const notificationsBus = useEventBus<string>('notification')

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data as any
  },
  async (error) => {
    const message = error.response.data.message
    if (message) {
      notificationsBus.emit('notify', { message, variant: 'danger', delay: 4000 } as INotificationOptions)
    }
    if (error.response && error.response.status === 401) {
      return Promise.reject(error.response.data as any)
    }
    return Promise.reject(error);
  }
);

useMock(apiInstance)
export default apiInstance
