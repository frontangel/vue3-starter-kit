<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';

const ruleIsTrue = ref(false)
const getComponent = () => defineAsyncComponent(() => import('~/components/features/ThemeSwitcher.vue'))
</script>
<template>
  <div class="flex w-full gap-4 mb-4">
    <va-button @click="ruleIsTrue = !ruleIsTrue">Toggle rule</va-button>
    <component v-if="ruleIsTrue" :is="getComponent()" />
  </div>
</template>
