<script lang="ts" setup>
import VaSvgIcon from '~/components/Icons/va-svg-icon.vue'
import { computed, inject, ref } from 'vue'

const model = defineModel<string>()
const props = defineProps<{
  prefix?: string
  placeholder?: string
  clearable?: boolean
  disabled?: boolean
  resetOnInput?: boolean
  password?: boolean
  autocomplete?: string
}>()

const globalOptions = inject<any>('globalOptions', { allFieldsClearable: false })
const formOptions = inject<any>('formOptions', { v$: null, loading: false })
const { isError, reset: resetField, loading } = inject<any>('fieldSettings', { isError: false, prop: '', loading: false, reset: () => {} })

const showPassword = ref(false)

const suffixButtons = computed(() => {
  const result = []
  if (model.value && (props.clearable || globalOptions.value.allFieldsClearable)) {
    result.push({
      icon: 'xmark',
      onClick: clearField
    })
  }

  if (model.value && props.password) {
    result.push({
      icon: showPassword.value ? 'eye-slash' : 'eye',
      onClick: () => showPassword.value = !showPassword.value
    })
  }
  return result
})

function clearField() {
  model.value = ''
  if (props.resetOnInput) {
    resetField()
  }
}

function onInput() {
  if (props.resetOnInput) {
    resetField()
  }
}
</script>

<template>
  <div class="va-form__item flex items-stretch" :class="[{ 'is-error': isError }, { 'is-disabled': formOptions.loading || disabled }]">
    <template v-if="!$slots.prefix && prefix">
      <div v-if="prefix" class="va-form__item-prefix">{{ prefix }}</div>
    </template>
    <slot name="prefix" />

    <div class="va-form__item-wrapper">
      <input
        v-model="model"
        :type="password && !showPassword ? 'password' : 'text'"
        :disabled="formOptions.loading || disabled"
        :autocomplete="autocomplete ? autocomplete : password ? 'current-password' : 'off'"
        :placeholder="placeholder"
        @input="onInput"
      />
    </div>

    <slot name="suffix" />

    <div v-if="suffixButtons.length" class="va-form__item-suffix flex items-stretch">
      <button
        v-for="(btn, index) of suffixButtons"
        :key="index"
        class="va-button is-link"
        @click.prevent.stop="btn.onClick"
      >
        <va-svg-icon :icon="btn.icon" :key="btn.icon" :size="16" />
      </button>
    </div>
  </div>
</template>
