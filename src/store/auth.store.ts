import { defineStore } from 'pinia'
import { computed, ref, shallowRef } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import AuthApi, { iSignInForm } from '~/api/auth.api.ts'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = shallowRef(useLocalStorage('accessToken', ''))
  const refreshToken = shallowRef(useLocalStorage('refreshToken', ''))
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
