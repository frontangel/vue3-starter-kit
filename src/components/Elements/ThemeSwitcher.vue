<script setup lang="ts">
import VaSwitcher from '~/components/Inputs/va-switcher.vue'
import { useThemeStore } from '~/store/theme.store.ts'
import { ref } from 'vue'
const themeStore = useThemeStore()

const isDark = ref(false)

function handleChange (value: boolean) {
  themeStore.theme = value ? 'dark' : 'light'
  themeStore.applyTheme()
}
</script>

<template>
  {{ themeStore.theme }} {{ isDark }}
  <va-switcher v-model="isDark" @update:model-value="handleChange" />
</template>
