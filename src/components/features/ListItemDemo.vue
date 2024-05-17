<script lang="ts" setup>
import { onUpdated } from 'vue';

const props = defineProps<{
  id: number
  label: string
  activeId: number
}>()

onUpdated(() => {
  console.log(props.id)
})
</script>

<template>
  <li>
    <span v-if="id === activeId">=></span>
    {{ label }}
  </li>
</template>
