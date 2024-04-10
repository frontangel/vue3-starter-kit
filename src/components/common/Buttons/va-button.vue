<script lang="ts" setup>
import VaSvgIcon from '~/components/common/Icons/va-svg-icon.vue'

enum ButtonVariantEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  INFO = 'info',
  DANGER = 'danger',
  WARNING = 'warning'
}

withDefaults(defineProps<{
  loading?: boolean
  disabled?: boolean
  submit?: boolean
  variant?: ButtonVariantEnum | string
  link?: boolean
}>(), {
  variant: () => ButtonVariantEnum.PRIMARY
})
</script>
<template>
  <button
    :disabled="loading || disabled"
    :type="submit ? 'submit' : 'button'"
    :class="['va-button',{ 'is-disabled': (loading || disabled)}, `va-button__${variant}`, { 'is-link': link }]"
  >
    <va-svg-icon v-if="loading" icon="yui-yang" :size="16" class="va-button-icon icon-left spin" />
    <slot />
  </button>
</template>
