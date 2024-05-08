<script setup lang="ts">
import { useRoute } from 'vue-router'
import LogoBlock from '~/components/features/LogoBlock.vue'
import ThemeSwitcher from '~/components/features/ThemeSwitcher.vue'
import SidebarMenu from '~/views/Guide/components/SidebarMenu.vue'

const route = useRoute()
</script>
<template>
  <div class="sidebar-layout flex">
    <div class="sidebar">
      <logo-block class="mb-4" />
      <hr class="mb-4">
      <sidebar-menu />
    </div>
    <div class="main-container">
      <header class="flex items-center justify-end">
        <theme-switcher />
      </header>
      <hr class="ml-4 mr-4">
      <main>
        <h1 v-if="route.meta.title" class="mt-0">{{ route.meta.title }}</h1>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <hr class="ml-4 mr-4">
      <footer>footer</footer>
    </div>
  </div>
</template>


