<script lang="ts" setup>
import { useRoute } from 'vue-router'
import {iMenu} from "~/interfaces/navigation.interface.ts";

const route = useRoute()
withDefaults(defineProps<{
  menu: iMenu[]
}>(), {
  menu: () => []
})

</script>

<template>
  <div class="nav-menu">
    <ul>
      <li v-for="(item, index) of menu" :key="index" :class="{ active: route.name === item.name, disabled: item.disabled }">
        <a v-if="item.disabled" href="#" @click.prevent>{{ item.text }}</a>
        <router-link v-else :to="{ name: item.name }">{{ item.text }}</router-link>
      </li>
    </ul>
  </div>
</template>
