<script lang="ts" setup>
import { nextTick, shallowRef } from 'vue';

const model = defineModel({ default: () => true })
const props = defineProps<{
  to: string
}>()
const loaded = shallowRef(false)
nextTick(() => loaded.value = props.to ? !!document.querySelector(props.to) : false)
</script>

<template>
  <teleport v-if="loaded && model && to" :to="to">
    <slot />
  </teleport>
  <slot v-else />
</template>
