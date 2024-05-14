export const authStoreSnippet = `import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import AuthApi from '~/api/auth.api.ts'
import { iSignInForm } from '~/interfaces/auth.interfaces.ts';

export const useAuthStore = defineStore('auth', () => {
  // State
  const accessToken = useLocalStorage('accessToken', '')
  
  // Actions
  const signIn = async (payload: iSignInForm) => {
    const { accessToken } = await AuthApi.signIn(payload)
    accessToken.value = accessToken
  }
  
  const logout = () => {
    accessToken.value = ''
  }

  // Getters
  const isAuth = computed(() => Boolean(accessToken.value))

  return {
    accessToken,
    isAuth,
    signIn,
    logout
  }
})`
