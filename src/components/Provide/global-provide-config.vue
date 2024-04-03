<script lang="ts" setup>

import { computed, provide, reactive } from 'vue'

const props = defineProps<{
  options: {
    allFieldsClearable: boolean
  }
}>()

const defaultOptions = reactive({
  allFieldsClearable: false
})

const globalOptions = computed(() => ({
...defaultOptions,
...props.options
}))
provide('globalOptions', globalOptions)
</script>
<template>
  <slot />
</template>
