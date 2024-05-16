import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {
      primary: '#f067b0',
      secondary: '#41d2ff',
      success: '#28a745',
      warning: '#ffc107',
      danger: '#dc3545',
      dark: '#3c3a44',
      info: '#ededed'
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '960px'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
