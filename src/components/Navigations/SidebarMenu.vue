<script lang="ts" setup>
import NavMenuGroup from '~/components/common/Menu/nav-menu-group.vue'
import NavMenu from '~/components/common/Menu/nav-menu.vue'
import { iMenu } from '~/interfaces/navigation.interface.ts'

const startMenu: iMenu[] = [
  { text: 'Introduction', to: '/guide/introduction' },
  { text: 'Quick Start', to: '/guide/quick-start' },
  { text: 'Router', to: '/guide/router' },
  { text: 'State', to: '/guide/state' },
  { text: 'Api', to: '/guide/api' }
]

const uiMenu: iMenu[] = [
  { text: 'Layouts', to: '/' },
  { text: 'Views', to: '/' },
  { text: 'Components', to: '/' },
  { text: 'Styles', to: '/' },
]

const formsMenu: iMenu[] = [
  { text: 'Form', to: '/' },
  { text: 'Table', to: '/' },
  { text: 'Notification', to: '/' },
  { text: 'Teleport', to: '/' },
]

const instrumentsMenu: iMenu[] = [
  { text: 'Config Provider', to: '/guide/config-provider' },
  { text: 'VueForm', to: '/' },
  { text: 'VueUse', to: '/' },
]
</script>

<template>
  <div class="sidebar-menu flex">
    <nav-menu-group title="Getting Started">
      <nav-menu :menu="startMenu" />
    </nav-menu-group>

    <nav-menu-group title="UI Setup">
      <nav-menu :menu="uiMenu" />
    </nav-menu-group>

    <nav-menu-group title="Elements Examples">
      <nav-menu :menu="formsMenu" />
    </nav-menu-group>

    <nav-menu-group title="Instruments">
      <nav-menu :menu="instrumentsMenu" />
    </nav-menu-group>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-menu {
  flex-direction: column;
  gap: 2rem;
}
</style>
