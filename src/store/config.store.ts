import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
  state: () => ({
    allFieldsClearable: false
  }),
  actions: {}
})
