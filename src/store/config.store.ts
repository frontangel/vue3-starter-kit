import { defineStore } from 'pinia'
import { shallowRef } from "vue";
import { useLocalStorage } from '@vueuse/core';

export const useConfigStore = defineStore('config', () => {
  const allFieldsClearable = shallowRef(false)
  const isMoved = useLocalStorage<boolean>('is-moved', false)
  function toggleMove() {
    isMoved.value = !isMoved.value
  }
  return {
    allFieldsClearable,
    isMoved,
    toggleMove
  }
})
