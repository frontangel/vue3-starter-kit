export function useWindow() {
  const getColorScheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const setDataTheme = (value: 'dark' | 'light' | 'system') => document.documentElement.setAttribute('data-theme', value)
  const applyTheme = (value: 'dark' | 'light' | 'system') => {
    const payload = value === 'system' ? getColorScheme() : value
    setDataTheme(payload)
  }

  return {
    getColorScheme,
    setDataTheme,
    applyTheme
  }
}
