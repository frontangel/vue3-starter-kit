<script lang="ts" setup>
import NavMenuGroup from '~/components/common/Menu/nav-menu-group.vue'
import NavMenu from '~/components/common/Menu/nav-menu.vue'
import { navMenu } from "~/lib/navigation.menu.ts";
</script>

<template>
  <div class="sidebar-menu flex">
    <nav-menu-group v-for="(item, index) of navMenu" :title="item.title" :key="index">
      <nav-menu :menu="item.menu" />
    </nav-menu-group>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-menu {
  flex-direction: column;
  gap: 2rem;
}
</style>
