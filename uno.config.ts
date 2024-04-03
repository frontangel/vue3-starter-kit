import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  theme: {
    breakpoints: {
      xs: '375px',
      sm: '768px',
      md: '1024px',
      lg: '1440px',
      xlg: '2560px'
    }
  },
  rules: [
    // ['m-1', { margin: '5rem' }]
  ]
})
