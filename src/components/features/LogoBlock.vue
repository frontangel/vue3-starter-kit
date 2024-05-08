<script setup lang="ts">
</script>
<template>
  <div class="logo-block flex items-center">
    <va-button link @click.prevent="$router.push({ name: 'Dashboard' })"><va-svg-icon icon="vite" size="40" />
      <span class="logo-btn-text">Vue Starter Kit</span>
    </va-button>
  </div>
</template>
<style lang="scss" scoped>
.logo-btn-text {
  color: var(--text-color);
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
