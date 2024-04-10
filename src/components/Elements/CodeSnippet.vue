<script lang="ts" setup>
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // або інша тема на ваш смак
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-bash';
import { onMounted, ref } from 'vue'
import CopyLink from '~/components/Elements/CopyLink.vue'

withDefaults(defineProps<{
  code: string
  language?: string
  text?: string
}>(), {
  language: () => 'javascript'
})

const codeRef = ref()

onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <div class="code-snippet mb-8">
    <div class="code-snippet__title">Example: <b v-if="text">{{ text }}</b></div>
    <pre><code :class="`language-${language}`" ref="codeRef"><template v-if="!$slots.default">{{ code }}</template><slot /></code></pre>
    <copy-link :source="code" />
  </div>
</template>
<style lang="scss" scoped>
.code-snippet {}
</style>
