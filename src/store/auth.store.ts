import { defineStore } from 'pinia'
import AuthApi, { iSignInForm } from '~/api/auth.api.ts'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    loading: false
  }),
  actions: {
    async signIn(payload: iSignInForm) {
      this.loading = true
      try {
        const { token } = (await AuthApi.signIn(payload)).data
        localStorage.setItem('token', token)
        this.token = token
      } finally {
        this.loading = false
      }
    },
    logout() {
      localStorage.removeItem('token')
      this.token = ''
    }
  },
  debounce: {
    signIn: 10000
  }
})
