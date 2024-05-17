export const mockAuthSnippet = `import { faker } from '@faker-js/faker'

export function SignIn(config: any) {
  const { email, password } = JSON.parse(config.data)

  if (email !== 'mail@domain.com' || password !== 'qwerty123') {
    return [401, { message: 'Login or password is incorrect!' }]
  }

  const data = {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ2YUBkZXZ1cmFpLmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.JAzQ8lLKEshmIcBkpuhi0IvJYKlZdg1CrKK84ZB3wc4',
    refreshToken: faker.string.hexadecimal({ length: 15 })
  }
  return [200, data]
}
`
export const mockAdapterSnippet = `import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { SignIn } from '~/api/mock/auth.mock.ts'

export default function useMock(apiInstance: AxiosInstance) {
  const mock = new MockAdapter(apiInstance, { delayResponse: 1200 })
  mock.onPost('/auth/login').reply(SignIn)
  // mock.on... your other requests
}
`
export const authApiSnippet = `import apiInstance from './instance.ts'
import { iSignInForm } from '~/interfaces/auth.interfaces.ts';

const AuthApi = {
  signIn(data: iSignInForm): Promise<{ accessToken: string; refreshToken: string }> {
    return apiInstance.post('/auth/login', data)
  }
}

export default AuthApi`

export const axiosInstanceSnippet = `import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useEventBus, useLocalStorage } from '@vueuse/core'
import { shallowRef } from 'vue'
import useMock from '~/api/mock/adapter.mock.ts'

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
  if (config.url && !authPaths.some(path => config.url?.includes(path))) {
    config.headers.Authorization = 'Bearer ' + 'accessToken.value';
  }
  return config as InternalAxiosRequestConfig;;
}

apiInstance.interceptors.request.use(attachAuthorizationHeader, Promise.reject)
apiInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    isRefreshed.value = false
    return response.data as any
  },
  async (error) => {
    const originalRequest = error.config
    
    // Check auth error
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (!isRefreshed.value) {
        isRefreshed.value = true
        originalRequest._retry = true;
        
        // Try to get new access token
        try {
          const response = await axios.post(import.meta.env.VITE_APP_API_URL' + '/auth/refresh', { refreshToken: refreshToken.value })
          updateAccessToken(response.data.accessToken)
          originalRequest.headers['Authorization'] = 'Bearer ' + accessToken.value}';
          isRefreshed.value = true;
          
          // Make original request again
          return apiInstance(originalRequest);
        } catch (refreshError) {
          isRefreshed.value = false;
          clearTokens()
        }
      }
    }
    return Promise.reject(error);
  }
);

// Comment the next line to disable mock
useMock(apiInstance)

export default apiInstance
`
