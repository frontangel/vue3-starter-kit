import { defineStore } from 'pinia'
import {reactive, shallowRef} from "vue";

export const useConfigStore = defineStore('config', () => {
  const allFieldsClearable = shallowRef(false)
  const isMoved = shallowRef(false)
  const isRendered = reactive({
    footer: false
  })
  function toggleMove() {
    isMoved.value = !isMoved.value
  }
  return {
    allFieldsClearable,
    isRendered,
    isMoved,
    toggleMove
  }
})
