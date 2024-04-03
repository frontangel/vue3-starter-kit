<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store.ts'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function logout() {
  authStore.logout()
  router.push({ name: 'SignIn'})
}
</script>
<template>
  <div class="sidebar-layout flex">
    <div class="sidebar">sidebar</div>
    <div class="main-container">
      <header class="text-right">
        <va-button variant="info" @click="logout">Logout</va-button>
      </header>
      <main>
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
  width: 96px;
  border-right: 1px solid var(--info-color);
  justify-content: center;
  overflow: auto;
  height: 100dvh;
  padding: 1rem 0.25rem;
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

