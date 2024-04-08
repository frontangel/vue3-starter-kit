<script lang="ts" setup>
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // або інша тема на ваш смак
import 'prismjs/components/prism-javascript';
import { onMounted } from 'vue'

onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <pre><code class="language-javascript"><slot /></code></pre>
</template>
