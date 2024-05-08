<script lang="ts" setup>
import { Icon } from "@iconify/vue";

defineProps<{
  icon: string
}>()
</script>

<template>
  <Icon :key="icon" :icon="icon" />
</template>
