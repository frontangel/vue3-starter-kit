<script lang="ts" setup>
defineProps<{
  img?: string
  content?: string
}>()
</script>
<template>
  <div class="empty-placeholder">
    <div class="empty-placeholder__content">{{ content }}</div>
    <slot />
  </div>
</template>

<style lang="scss">
.empty-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--info-color);
  padding: 2rem;
  border-radius: .5rem;
  &__content {
    font-size: 1.5rem;
  }
}
</style>
