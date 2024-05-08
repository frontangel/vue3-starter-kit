<script lang="ts" setup>
import { iFileList } from '~/interfaces/content.iterface.ts'

defineProps<{
  isSub?: boolean
  tree: iFileList[]
}>()
</script>

<template>
  <ul :class="{ 'file-list': !isSub }">
    <li v-for="(item, index) of tree" :key="index">
      <span :class="[`file-list__${item.isFile ? 'file' : 'folder'}`]">{{ item.name }}</span> - {{ item.desc }}
      <va-tree-view v-if="item.sub?.length" :tree="item.sub" is-sub />
    </li>
  </ul>
</template>
