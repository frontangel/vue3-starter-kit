import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { SignIn } from '~/api/mock/auth.mock.ts'

export default function useMock(apiInstance: AxiosInstance) {
  const mock = new MockAdapter(apiInstance, { delayResponse: 1200 })
  mock.onPost('/auth/login').reply(SignIn)
  // mock.on... your other requests
}
