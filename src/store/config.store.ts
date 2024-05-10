import { defineStore } from 'pinia'
import {shallowReactive, shallowRef} from "vue";

export const useConfigStore = defineStore('config', () => {
  const allFieldsClearable = shallowRef(false)
  const isRendered = shallowReactive({
    footer: false
  })
  return {
    allFieldsClearable,
    isRendered
  }
})
