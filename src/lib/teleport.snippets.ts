export const teleportComponentsSnippet = `<script lang="ts" setup>
import { nextTick, shallowRef } from 'vue';

const props = defineProps<{
  to: string
}>()
const loaded = shallowRef(false)
nextTick(() => loaded.value = props.to ? !!document.querySelector(props.to) : false)
</script>

<template>
  <teleport v-if="loaded && to" :to="to">
    <slot />
  </teleport>
  <slot v-else />
</template>`

export const usageTeleportSnippet = `<va-teleport to="#footer">
  <!-- you code here -->
</va-teleport>`
