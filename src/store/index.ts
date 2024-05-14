import { createPinia } from 'pinia'
import { PiniaDebounce } from '@pinia/plugin-debounce'

// @ts-ignore
import { debounce } from 'ts-debounce'

const pinia = createPinia()
pinia.use(PiniaDebounce(debounce))

export default pinia
