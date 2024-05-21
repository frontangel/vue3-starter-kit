<script lang="ts" setup>
import StylesFolderScreen from '~/assets/img/styles-folder-screen.png'
</script>
<template>
  <div class="mb-8">
    <p>A main style file (e.g., main.scss or index.css) imports all necessary styles from the _subfiles, providing a single point of management for all styles.</p>
    <p>By organizing styles by their purpose, you ensure better modularity and easier maintenance of your application's styling.</p>
    <p class="text-center"><img :src="StylesFolderScreen" alt="styles-folder-screen" width="230"></p>
  </div>
</template>
