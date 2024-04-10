<script lang="ts" setup>
import { provide, shallowRef } from 'vue'

export interface iConfig {
  allFieldsClearable?: boolean
}

const props = withDefaults(defineProps<{
  options?: iConfig
}>(), {
  options: () => ({
    allFieldsClearable: false
  })
})

const globalOptions = shallowRef(props.options)
provide('globalOptions', globalOptions)
</script>

<template>
  <slot />
</template>
