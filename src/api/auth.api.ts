import apiInstance from './instance.ts'

const ResidentsApi = {
  signIn(data: iSignInForm) {
    return apiInstance.post('/sign-in', data)
  }
}

export default ResidentsApi

export interface iSignInForm {
  email: string
  password: string
}
