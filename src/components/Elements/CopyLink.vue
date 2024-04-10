<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

const { copy, copied } = useClipboard()
defineProps<{
  source: string
}>()
</script>

<template>
  <a href="#" class="copy-link" @click="copy(source)">
    <va-svg-icon :icon="copied ? 'check' : 'copy'" />
  </a>
</template>

<style lang="scss" scoped>
.copy-link {
  font-size: 14px;
  text-decoration: none;
  color: var(--primary-color);
  &:disabled {
    --dark-info-color: var(--info-color);
  }
}
</style>
