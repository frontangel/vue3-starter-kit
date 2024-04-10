<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="">
    <h1>{{ route.meta?.title || route.name }}</h1>
    <code-snippet v-if="route.name === 'QuickStart'" language="bash" code="git clone git@github.com:AngelSlava/vue-vite-ts.git" />
  </div>
</template>
