import apiInstance from './instance.ts'
import { iSignInForm, isSignInResponse } from '~/interfaces/auth.interfaces.ts';

const AuthApi = {
  signIn(data: iSignInForm): Promise<isSignInResponse> {
    return apiInstance.post('/auth/login', data)
  }
}

export default AuthApi
