<script lang="ts" setup>
import NavMenuGroup from '~/components/Navigations/nav-menu-group.vue'
import NavMenu from '~/components/Navigations/nav-menu.vue'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const startMenu = [
  { text: 'Introduction', to: '/guide/introduction' },
  { text: 'Quick Start', to: '/guide/quick-start' },
]

const router = useRouter()
const route = useRoute()

onMounted(() => {
  console.log(route)
})
</script>

<template>
  <div class="sidebar-menu flex">
    <nav-menu-group title="Getting Started">
      <nav-menu :menu="startMenu" />
    </nav-menu-group>

    <nav-menu-group title="Getting Started">
      <nav-menu :menu="startMenu" />
    </nav-menu-group>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-menu {
  flex-direction: column;
  gap: 2rem;
}
</style>
