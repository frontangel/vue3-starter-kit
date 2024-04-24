<script setup lang="ts">
</script>

<template>
  <div class="auth-layout flex justify-center items-center min-h-dvh">
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
}
</style>

