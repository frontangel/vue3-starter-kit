<script setup lang="ts">
import { useRoute } from 'vue-router'
import LogoBlock from '~/components/features/LogoBlock.vue'
import ThemeSwitcher from '~/components/features/ThemeSwitcher.vue'
import SidebarMenu from '~/views/Guide/components/SidebarMenu.vue'
import { ref } from 'vue';
import {useConfigStore} from "~/store/config.store.ts";
import PrevNextButtons from "~/views/Guide/components/PrevNextButtons.vue";
import VaTeleport from '~/components/common/Elements/va-teleport.vue';

const route = useRoute()
const configStore = useConfigStore()

const footerIsEmpty = ref(false)
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
        <a href="https://www.linkedin.com/in/angelslava" target="_blank" rel="nofollow" class="external-link">
          <va-svg-icon icon="linkedin" size="18" />
        </a>
        <a href="https://github.com/frontangel/vue3-starter-kit" target="_blank" rel="nofollow" class="external-link">
          <va-svg-icon icon="git" size="18" />
        </a>
        <theme-switcher class="ml-2" />
      </header>
      <hr class="ml-4 mr-4">
      <main class="!md-px-8">
        <h1 v-if="route.meta.title" class="mt-0">{{ route.meta.title }}</h1>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>

        <va-teleport v-model="configStore.isMoved" to="#footer">
          <prev-next-buttons />
        </va-teleport>
      </main>

      <hr class="ml-4 mr-4" v-if="!footerIsEmpty">
      <footer id="footer" class="!md-px-8" :class="{ empty: footerIsEmpty }" v-detect-children="{ callback: (value: boolean) => footerIsEmpty = !value }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.external-link {
  color: var(--dark-info-color);
  transition: color 0.3s;
  &:hover {
    color: var(--text-color);
  }
}
</style>


