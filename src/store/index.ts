import { createPinia } from 'pinia'
import debounce from 'lodash/debounce'
import { PiniaDebounce } from '@pinia/plugin-debounce'

const pinia = createPinia()
pinia.use(PiniaDebounce(debounce))

export default pinia
