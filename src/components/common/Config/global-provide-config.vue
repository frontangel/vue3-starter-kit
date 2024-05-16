<script lang="ts" setup>
import { provide, ref } from 'vue';
import { iConfig } from '~/interfaces/config.interface.ts';

const props = withDefaults(defineProps<{
  options?: iConfig
}>(), {
  options: () => ({
    allFieldsClearable: false
  })
})

const globalOptions = ref(props.options)
provide('globalOptions', globalOptions)
</script>

<template>
  <slot />
</template>
