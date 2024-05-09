<script lang="ts" setup>
import { useRoute } from 'vue-router'

interface iNavMenu {
  text: string
  to: string
  disabled?: boolean
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
      <li v-for="(item, index) of menu" :key="index" :class="{ active: route.path === item.to, disabled: item.disabled }">
        <router-link v-if="!item.disabled" :to="item.to">{{ item.text }}</router-link>
        <a href="#" @click.prevent>{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>
