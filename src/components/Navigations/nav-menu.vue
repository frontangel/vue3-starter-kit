<script lang="ts" setup>
import { useRoute } from 'vue-router'

interface iNavMenu {
  text: string
  to: string
}

const route = useRoute()
withDefaults(defineProps<{
  menu: iNavMenu[]
}>(), {
  menu: () => []
})

</script>

<template>
  <div class="nav-menu">
    <ul>
      <li v-for="(item, index) of menu" :key="index" :class="{ active: route.path === item.to }">
        <router-link :to="item.to">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>
