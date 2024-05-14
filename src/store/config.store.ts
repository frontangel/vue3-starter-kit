import { defineStore } from 'pinia'
import {reactive, shallowRef} from "vue";

export const useConfigStore = defineStore('config', () => {
  const allFieldsClearable = shallowRef(false)
  const isRendered = reactive({
    footer: false
  })
  return {
    allFieldsClearable,
    isRendered
  }
})
