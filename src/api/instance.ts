import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useLocalStorage } from '@vueuse/core'

import useMock from '~/api/mock/adapter.mock.ts'
import { shallowRef } from 'vue'
import { useNotify } from '~/utils/notify.utils.ts';

const { notify } = useNotify()
const refreshToken = useLocalStorage('refreshToken', '')
const accessToken = useLocalStorage('accessToken', '')
const isRefreshed = shallowRef(false)

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

function updateAccessToken(newAccessToken: string): void {
  accessToken.value = newAccessToken;
}

function clearTokens(): void {
  refreshToken.value = '';
  accessToken.value = '';
}

function attachAuthorizationHeader(config: AxiosRequestConfig): InternalAxiosRequestConfig {
  if (!config.headers) {
    config.headers = {};
  }
  const authPaths = ['/auth/login', '/auth/refresh'];
  if (config.url && !authPaths.includes(config.url)) {
    config.headers.Authorization = `Bearer ${accessToken.value}`;
  }
  return config as InternalAxiosRequestConfig;
}

apiInstance.interceptors.request.use(attachAuthorizationHeader, Promise.reject)
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
          updateAccessToken(response.data.accessToken)
          originalRequest.headers['Authorization'] = `Bearer ${accessToken.value}`;
          isRefreshed.value = true;
          return apiInstance(originalRequest);
        } catch (refreshError) {
          isRefreshed.value = false;
          clearTokens()
        }
      }
    }

    const message = error.response.data.message
    if (message) {
      notify({ message, variant: 'danger', delay: 4000 })
    }

    return Promise.reject(error);
  }
);

// Comment the next line to disable mock
useMock(apiInstance)

export default apiInstance
