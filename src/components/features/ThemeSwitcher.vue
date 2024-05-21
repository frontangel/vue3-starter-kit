<script setup lang="ts">
import VaSwitcher from '~/components/common/Inputs/va-switcher.vue'
import { useThemeStore } from '~/store/theme.store.ts'
import { computed, shallowRef } from 'vue'
const themeStore = useThemeStore()

const isSystemDark = shallowRef(window.matchMedia('(prefers-color-scheme: dark)').matches)
const modelValue = computed(() => themeStore.theme === 'system' ? isSystemDark.value : themeStore.theme === 'dark')
const icon = computed(() => {
  return !modelValue.value
    ? "line-md:moon-to-sunny-outline-loop-transition"
    : "line-md:sunny-outline-to-moon-loop-transition";
})

const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
colorSchemeQuery.addEventListener('change', (e) => isSystemDark.value = e.matches);

function toggleTheme(value: boolean) {
  value === isSystemDark.value
    ? themeStore.setSystemTheme()
    : themeStore.toggleTheme()
}
</script>

<template>
  <va-switcher
    :model-value="modelValue"
    :icon="icon"
    inactive-btn-bg="white"
    inactive-btn-color="black"
    active-btn-bg="black"
    active-btn-color="white"
    active-bg="var(--dark-color)"
    active-border-color="var(--dark-info-color)"
    @update:model-value="toggleTheme"
  />
</template>
