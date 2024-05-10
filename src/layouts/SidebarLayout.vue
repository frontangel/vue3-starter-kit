<script setup lang="ts">
import { useRoute } from 'vue-router'
import LogoBlock from '~/components/features/LogoBlock.vue'
import ThemeSwitcher from '~/components/features/ThemeSwitcher.vue'
import SidebarMenu from '~/views/Guide/components/SidebarMenu.vue'
import {nextTick, onBeforeUnmount, onMounted, shallowRef} from "vue";
import {useConfigStore} from "~/store/config.store.ts";
import {useWindow} from "~/utils/window.utils.ts";

const route = useRoute()
const configStore = useConfigStore()
const { observeTeleport } = useWindow()

const observer = shallowRef()
const footerIsNotEmpty = shallowRef(true)
function onFooterTeleported(value: boolean) {
  footerIsNotEmpty.value = value
}

onMounted(() => {
  nextTick(() => {
    configStore.isRendered.footer = !!document.getElementById('footer')
    if (configStore.isRendered.footer && !observer.value) {
      observer.value = observeTeleport('footer', onFooterTeleported)
    }
  })
})

onBeforeUnmount(() => {
  observer.value?.disconnect();
})
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
      <main class="!md-px-8">
        <h1 v-if="route.meta.title" class="mt-0">{{ route.meta.title }}</h1>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <hr v-if="configStore.isRendered && footerIsNotEmpty" class="ml-4 mr-4">
      <footer id="footer" v-show="footerIsNotEmpty" />
    </div>
  </div>
</template>


