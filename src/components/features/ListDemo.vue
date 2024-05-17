<script lang="ts" setup>
  import { ref } from 'vue'

  const items = ref([
    { id: 0, label: 'Janet Griffin' },
    { id: 1, label: 'Lisa Ann' },
    { id: 2, label: 'Josephine Jackson' },
    { id: 3, label: 'Abella Anderson' },
    { id: 4, label: 'Ivy Madison' },
    { id: 5, label: 'CJ Miles' },
  ])

  const activeId = ref(0)
</script>

<template>
  <button @click="activeId = (activeId + 1) % items.length">Next</button>
  <ul>
    <ListItemDemo
      v-for="item of items"
      :key="item.id"
      :id="item.id"
      :label="item.label"
      :active-id="activeId"
    />
  </ul>
</template>

<style>
  ul {
    list-style: none;
  }
</style>
