<script lang="ts" setup>
import { inject } from "vue";

defineProps<{
  label?: string
}>()

const globalOptions = inject<any>('tabsOptions', { tab: 0 })

</script>
<template>
  <div class="va-tab">
    <slot :tab="globalOptions.tab" />
  </div>
</template>
