import apiInstance from './instance.ts'

const ResidentsApi = {
  signIn(data: iSignInForm): Promise<{ accessToken: string; refreshToken: string }> {
    return apiInstance.post('/auth/login', data)
  }
}

export default ResidentsApi

export interface iSignInForm {
  email: string
  password: string
}
