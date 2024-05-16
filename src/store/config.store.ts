import { defineStore } from 'pinia'
import { reactive } from 'vue';
import { useLocalStorage } from '@vueuse/core';

export const useConfigStore = defineStore('config', () => {
  const config = reactive({
    allFieldsClearable: false
  })
  const isMoved = useLocalStorage<boolean>('is-moved', false)
  function toggleMove() {
    isMoved.value = !isMoved.value
  }
  return {
    config,
    isMoved,
    toggleMove
  }
})
