<script lang="ts" setup>
import { computed, provide } from 'vue'

export interface IFormOptions {
  loading: boolean
}

const props = defineProps<{
  rules?: any
  loading?: boolean
}>()

const emits = defineEmits(['submit'])
const formOptions = computed<Partial<IFormOptions>>(() => ({
  v$: props.rules,
  loading: props.loading
}))
provide('formOptions', formOptions)
</script>
<template>
  <form @submit.prevent="emits('submit', $event)">
    <slot />
  </form>
</template>
