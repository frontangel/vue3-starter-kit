import apiInstance from './instance.ts'
import { iSignInForm } from '~/interfaces/auth.interfaces.ts';

const AuthApi = {
  signIn(data: iSignInForm): Promise<{ accessToken: string; refreshToken: string }> {
    return apiInstance.post('/auth/login', data)
  }
}

export default AuthApi
