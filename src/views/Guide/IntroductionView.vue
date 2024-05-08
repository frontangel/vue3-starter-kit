<script lang="ts" setup>
import { iFileList } from '~/interfaces/content.iterface.ts'

const fileList: iFileList[] = [
  { name: 'api', desc: 'управління всіма запитами до зовнішніх або внутрішніх API', sub: [{ name: 'mock', desc: 'використовується для зберігання мокових (замінних) даних і функцій, які імітують відповіді від зовнішніх AP' }] },
  { name: 'assets', desc: 'для зберігання статичних ресурсів додатка', sub: [
    { name: 'fonts', desc: 'шрифти' },
    { name: 'icons', desc: 'іконки' },
    { name: 'img', desc: 'зображення' },
    ] },
  { name: 'components', desc: 'основне місце для зберігання Vue компонентів', sub: [
      {name: 'common', desc: 'універсальні компоненти, які можуть бути використані в багатьох місцях додатку'},
      {name: 'feature', desc: 'компоненти, які є специфічними для певних функціональних частин або "фіч" додатку'},
    ]},
  { name: 'layouts', desc: 'використовується для зберігання компонентів макетів, які визначають структуру основних розкладок сторінок у додатку' },
  { name: 'router', desc: 'для зберігання конфігурацій та скриптів, пов\'язаних з маршрутизацією', sub: [
      { name: 'middleware', desc: 'функції, які виконуються перед входом в маршрут або під час зміни маршрутів' },
      { name: 'parts', desc: 'зберігання частин маршрутизаційних конфігурацій' }
    ] },
  { name: 'store', desc: 'для зберігання усієї логіки та стану додатку' },
  { name: 'styles', desc: 'зберігання стилів, які визначають зовнішній вигляд додатка' },
  { name: 'utils', desc: 'допоміжні функції, які можуть бути використані в різних частинах додатку' },
  { name: 'views', desc: 'сторінки або великі секції додатку' },
]

const librariesList = [
  { url: 'https://vueuse.org/', label: 'VueUse', desc: 'Collection of Vue Composition Utilities' },
  { url: 'https://vuelidate-next.netlify.app/', label: 'Vuelidate', desc: 'Vuelidate is considered model-based because the validation rules are defined next to your data, and the validation tree structure matches the data model structure' },
  { url: 'https://fakerjs.dev/', label: 'Faker', desc: 'Generate massive amounts of fake (but realistic) data for testing and development' },
  { url: 'https://iconify.design/', label: 'Iconify', desc: 'All popular icon sets, one framework' },
  { url: 'https://pinia.vuejs.org/', label: 'Pinia', desc: 'The intuitive store for Vue.js' },
  { url: 'https://github.com/ctimmerm/axios-mock-adapter#readme', label: 'axios-mock-adapter', desc: 'Axios adapter that allows to easily mock requests' },
]
</script>

<template>
  <div class="">
    <h2>Вітаю друже!</h2>
    <p class="mb-8">
      Хочу представити starter kit який допомогає мені розробці Front-End.
      Тут є все необхідне для швидкого початку розробки майже будь-якого проєкту на Vue.
      Ти зможеш знайти детальний опис архітектури проєкту з прикладами і посиланнями на джерела.
    </p>

    <h3>Архітектура:</h3>
    <p class="mb-8">
      <va-tree-view :tree="fileList" />
    </p>

    <h3>Бібліотеки:</h3>
    <ul class="no-list">
      <li v-for="(item, index) of librariesList" :key="index" class="mb-2">
        <a :href="item.url" rel="nofollow" target="_blank">{{ item.label }}</a> - {{ item.desc }}
      </li>
    </ul>
  </div>
</template>
