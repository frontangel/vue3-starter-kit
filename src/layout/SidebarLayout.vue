<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store.ts'
import { useRoute, useRouter } from 'vue-router'
import LogoBlock from '~/components/Elements/LogoBlock.vue'
import ThemeSwitcher from '~/components/Elements/ThemeSwitcher.vue'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

function logout() {
  authStore.logout()
  router.push({ name: 'SignIn'})
}
</script>
<template>
  <div class="sidebar-layout flex">
    <div class="sidebar">
      <logo-block class="mb-8" />
      <sidebar-menu />
    </div>
    <div class="main-container">
      <header class="flex items-center justify-end">
        <theme-switcher />
        <va-button variant="info" @click="logout">Logout</va-button>
      </header>
      <main>
        <h1 v-if="route.meta.title">{{ route.meta.title }}</h1>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <footer>footer</footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-layout {
  display: flex;
  height: 100dvh;
}
.sidebar {
  display: flex;
  width: 300px;
  border-right: 1px solid var(--info-color);
  overflow: auto;
  height: 100dvh;
  padding: 1rem;
  flex-direction: column;
}
.main-container {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
  width: 100%;

  > header {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid var(--info-color);
    gap: 1rem;
  }
  > main {
    height: 100%;
    overflow: auto;
    padding: 1rem;
  }
  > footer {
    padding: 0.5rem 1rem;
    border-top: 1px solid var(--info-color);
  }
}
</style>

