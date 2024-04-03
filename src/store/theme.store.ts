import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: localStorage.getItem('theme') || 'system', // Variants: 'light', 'dark', 'system'
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', this.theme)
      this.applyTheme();
    },
    setSystemTheme() {
      this.theme = 'system'
      localStorage.setItem('theme', 'system')
      this.applyTheme()
    },
    applyTheme() {
      if (this.theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', systemTheme)
      } else {
        document.documentElement.setAttribute('data-theme', this.theme)
      }
    }
  }
})
