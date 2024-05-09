<script lang="ts" setup>
import NavMenuGroup from '~/components/common/Menu/nav-menu-group.vue'
import NavMenu from '~/components/common/Menu/nav-menu.vue'
import { iMenu } from '~/interfaces/navigation.interface.ts'

const startMenu: iMenu[] = [
  { text: 'Introduction', to: '/guide' },
  { text: 'Quick Start', to: '/guide/quick-start' },
  { text: 'Router', to: '/guide/router', disabled: true },
  { text: 'State', to: '/guide/state', disabled: true },
  { text: 'Api', to: '/guide/api', disabled: true }
]

const uiMenu: iMenu[] = [
  { text: 'Layouts', to: '/guide/layouts', disabled: true },
  { text: 'Views', to: '/guide/views', disabled: true },
  { text: 'Components', to: '/guide/components', disabled: true },
  { text: 'Styles', to: '/guide/styles', disabled: true },
]

const examplesMenu: iMenu[] = [
  { text: 'Login Form', to: '/guide/login-example' },
  { text: 'Table', to: '/guide/table-example', disabled: true },
  { text: 'Notification', to: '/guide/table-example', disabled: true },
  { text: 'Teleport', to: '/guide/teleport-example', disabled: true },
  { text: 'Config Provider', to: '/guide/config-provider', disabled: true },
]

const instrumentsMenu: iMenu[] = [
  { text: 'VueForm', to: '/', disabled: true },
  { text: 'VueUse', to: '/', disabled: true },
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
