<script lang="ts" setup>
import {
  asyncComponentGood, asyncComponentNotGood, eventBusCore, eventBusVue,
  goodLocalstorage,
  goodVModel,
  notGoodLocalstorage,
  notGoodVModel
} from '~/lib/quicktips.snippets.ts';
import { defineAsyncComponent } from 'vue';

const getComponent = (name: string) => defineAsyncComponent(() => import(`~/views/Guide/components/${name}.vue`))

const mapData = [
  { name: 'V-Model', notCool: notGoodVModel, cool: goodVModel },
  { name: 'Store & Local storage', notCool: notGoodLocalstorage, cool: goodLocalstorage },
  { name: 'Async Component', notCool: asyncComponentNotGood, cool: asyncComponentGood, demo: 'AsyncComponentExample' },
  { name: 'Event Bus', notCool: eventBusVue, cool: eventBusCore },
  { name: 'Optimize your props', demo: 'PropsOptimizeExample' },
]
</script>

<template>
  <div class="mb-8">
    <template v-for="item of mapData">
      <h3>{{ item.name }}</h3>

      <component v-if="item.demo" :is="getComponent(item.demo)" />

      <div v-if="item.notCool || item.cool" class="grid grid-cols-2 gap-4 mb-8">
        <code-snippet v-if="item.notCool" :code="item.notCool" text="Not cool" />
        <code-snippet v-if="item.cool" :code="item.cool" text="Cool" />
      </div>
    </template>
  </div>
</template>
