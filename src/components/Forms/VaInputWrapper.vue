<script lang="ts" setup>
import { computed, inject, provide } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  prop: string
  errors?: any[]
}>(), {
  errors: () => []
})

const formOptions = inject<any>('formOptions', { v$: null, loading: false })

const computedErrors = computed(() => {
  if (props.errors.length) {
    return props.errors
  }
  const validator = formOptions.value.v$
  if (validator && validator[props.prop]) {
    return validator[props.prop]?.$errors
  }
  return []
})

const isError = computed(() => Boolean(computedErrors.value?.length))
provide('fieldSettings', { isError, prop: props.prop, reset: resetField })

function resetField() {
  if (formOptions.value.v$ && props.prop) {
    formOptions.value.v$[props.prop]?.$reset()
  }
}
</script>

<template>
  <div class="va-field-control py-4" :class="{ 'is-loading': formOptions.loading }">
    <div v-if="!$slots.label" class="va-field-control__label">
     {{ label }}
    </div>
    <slot name="label" :label="label" />
    <slot />
    <div v-if="isError && !$slots.error" class="va-field-control__error">{{ computedErrors[0].$message }}</div>
    <slot name="error" :error="isError ? computedErrors[0].$message : ''" :errors="computedErrors" />
  </div>
</template>
