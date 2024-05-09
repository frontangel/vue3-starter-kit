<script lang="ts" setup>
import NavMenuGroup from '~/components/common/Menu/nav-menu-group.vue'
import NavMenu from '~/components/common/Menu/nav-menu.vue'
import { iMenu } from '~/interfaces/navigation.interface.ts'

const startMenu: iMenu[] = [
  { text: 'Introduction', to: '/guide' },
  { text: 'Quick Start', to: '/guide/quick-start' },
  { text: 'Router', to: '/guide/router' },
  { text: 'State', to: '/guide/state' },
  { text: 'Api', to: '/guide/api' }
]

const uiMenu: iMenu[] = [
  { text: 'Layouts', to: '/guide/layouts' },
  { text: 'Views', to: '/guide/views' },
  { text: 'Components', to: '/guide/components' },
  { text: 'Styles', to: '/guide/styles' },
]

const examplesMenu: iMenu[] = [
  { text: 'Login Form', to: '/guide/login-example'},
  { text: 'Table', to: '/guide/table-example' },
  { text: 'Notification', to: '/guide/table-example' },
  { text: 'Teleport', to: '/guide/teleport-example' },
  { text: 'Config Provider', to: '/guide/config-provider' },
]

const instrumentsMenu: iMenu[] = [
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

    <nav-menu-group title="Examples">
      <nav-menu :menu="examplesMenu" />
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
