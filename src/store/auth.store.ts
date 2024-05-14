import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import AuthApi from '~/api/auth.api.ts'
import { iSignInForm } from '~/interfaces/auth.interfaces.ts';

export const useAuthStore = defineStore('auth', () => {
  const accessToken = useLocalStorage('accessToken', '')
  const refreshToken = useLocalStorage('refreshToken', '')
  const loading = ref(false)

  const isAuth = computed(() => Boolean(accessToken.value))

  const signIn = async (payload: iSignInForm) => {
    loading.value = true
    try {
      const response = await AuthApi.signIn(payload)
      accessToken.value = response.accessToken
      refreshToken.value = response.refreshToken
    } finally {
      loading.value = false
    }
  }
  const logout = () => {
    accessToken.value = ''
    refreshToken.value = ''
  }

  return {
    accessToken,
    loading,
    isAuth,
    signIn,
    logout
  }
})
