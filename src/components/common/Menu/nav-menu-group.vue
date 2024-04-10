<script lang="ts" setup>
defineProps<{
  title?: string
}>()
</script>
<template>
  <div class="nav-menu-group">
    <div class="nav-menu-group__title mb-1">
      <template v-if="!$slots.title">{{ title }}</template>
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>
