import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { useWindow } from '~/utils/window.utils.ts'

export const useThemeStore = defineStore('theme', () => {
  const theme:any = useLocalStorage('theme', 'system')

  const { getColorScheme } = useWindow()
  const applyTheme = () => useWindow().applyTheme(theme.value)

  const toggleTheme = () => {
    theme.value = getColorScheme() === 'light' ? 'dark' : 'light'
    applyTheme()
  }

  const setSystemTheme = () => {
    theme.value = 'system'
    applyTheme()
  }

  return {
    theme,
    toggleTheme,
    setSystemTheme,
    applyTheme
  }
})
