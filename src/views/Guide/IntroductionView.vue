<script lang="ts" setup>
import { iFileList } from '~/interfaces/content.iterface.ts'

const fileList: iFileList[] = [
  { name: 'api', desc: '', sub: [{ name: 'mock', desc: '' }] },
  { name: 'assets', desc: '', sub: [
    { name: 'fonts', desc: '' },
    { name: 'icons', desc: '' },
    { name: 'img', desc: '' },
    ] },
  { name: 'components', desc: '', sub: [
      {name: 'common', desc: ''},
      {name: 'feature', desc: ''},
    ]},
  { name: 'layouts', desc: '' },
  { name: 'router', desc: '', sub: [
      { name: 'middleware', desc: '' },
      { name: 'parts', desc: '' }
    ] },
  { name: 'store', desc: '' },
  { name: 'styles', desc: '' },
  { name: 'utils', desc: '' },
  { name: 'views', desc: '' },
  { name: 'App.vue', isFile: true, desc: '' },
  { name: 'main.ts', isFile: true, desc: '' },
]
</script>

<template>
  <div class="">
    <p>
      <b>Вітаю друже!</b><br />
      Хочу представити starter kit який допомогає мені розробці Front-End.
      Тут є все необхідне для швидкого початку розробки майже будь-якого проєкту на Vue.
      Ти зможеш знайти детальний опис архітектури проєкту з прикладами і посиланнями на джерела.
    </p>

    <p>
      <b>Архітектура проєкту:</b>
      <va-tree-view :tree="fileList" />
    </p>

    <p>
      <b>Third party libraries:</b>
    </p>
  </div>
</template>
