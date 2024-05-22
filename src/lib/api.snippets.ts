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

export const axiosInstanceSnippet = `import axios from 'axios';
import useMock from '~/api/mock/adapter.mock.ts'

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

// Comment the next line to disable mock
useMock(apiInstance)

export default apiInstance`
