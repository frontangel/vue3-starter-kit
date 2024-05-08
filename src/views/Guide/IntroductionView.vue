<script lang="ts" setup>
import { iFileList } from '~/interfaces/content.iterface.ts'

const fileList: iFileList[] = [
  { name: 'api', desc: 'manages all requests to external or internal APIs', sub: [
    { name: 'mock', desc: 'used for storing mock data and functions that simulate responses from external APIs' }
    ] },
  { name: 'assets', desc: 'for storing static resources of the app', sub: [
    { name: 'fonts', desc: 'fonts' },
    { name: 'icons', desc: 'icons' },
    { name: 'img', desc: 'images' },
    ] },
  { name: 'components', desc: 'the main place for storing Vue components', sub: [
      {name: 'common', desc: 'universal components that can be used in many parts of the app'},
      {name: 'feature', desc: 'components specific to certain functional parts or "features" of the app'},
    ]},
  { name: 'layouts', desc: 'used for storing layout components that define the structure of the main page layouts in the app' },
  { name: 'router', desc: 'for storing configurations and scripts related to routing', sub: [
      { name: 'middleware', desc: 'functions that are executed before entering a route or during route changes' },
      { name: 'parts', desc: 'for storing configurations and scripts related to routing' }
    ] },
  { name: 'store', desc: 'for storing all the logic and state of the app' },
  { name: 'styles', desc: 'storing styles that define the appearance of the app' },
  { name: 'utils', desc: 'auxiliary functions that can be used in different parts of the app' },
  { name: 'views', desc: 'pages or large sections of the app' },
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
    <h2>Hello friend!</h2>
    <p class="mb-8">
      I want to introduce you to a starter kit that helps me in developing Front-End. It contains everything necessary for a quick start on almost any project on Vue. You will be able to find a detailed description of the project architecture with examples and references.
    </p>

    <h3>Architecture:</h3>
    <p class="mb-8">
      <va-tree-view :tree="fileList" />
    </p>

    <h3>Libraries:</h3>
    <ul class="no-list">
      <li v-for="(item, index) of librariesList" :key="index" class="mb-2">
        <a :href="item.url" rel="nofollow" target="_blank">{{ item.label }}</a> - {{ item.desc }}
      </li>
    </ul>
  </div>
</template>
