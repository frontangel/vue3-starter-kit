<script lang="ts" setup>
const model = defineModel<boolean>()
</script>
<template>
  <div class="va-switcher" @click="">
    <input v-model="model" type="checkbox" />
  </div>
</template>
