<script lang="ts" setup>
import {
  asyncComponentGood, asyncComponentNotGood, eventBusCore, eventBusVue,
  goodLocalstorage,
  goodVModel,
  notGoodLocalstorage,
  notGoodVModel
} from '~/lib/quicktips.snippets.ts';
import { defineAsyncComponent, ref } from 'vue';

const getComponent = () => defineAsyncComponent(() => import('~/components/features/ThemeSwitcher.vue'))
const ruleIsTrue = ref(false)


</script>

<template>
  <div class="mb-8">
    <h3>V-Model</h3>
    <div class="flex gap-4 mb-8 w-full">
      <code-snippet :code="notGoodVModel" text="Not cool" class="w-50%" />
      <code-snippet :code="goodVModel" text="Cool" class="w-50%" />
    </div>

    <h3>Store & Local storage</h3>
    <div class="flex gap-4 mb-8">
      <code-snippet :code="notGoodLocalstorage" text="Not cool" class="w-50%" />
      <code-snippet :code="goodLocalstorage" text="Cool" class="w-50%" />
    </div>

    <h3>Async Component</h3>
    <div class="flex w-full gap-4 mb-4">
      <va-button @click="ruleIsTrue = !ruleIsTrue">Toggle rule</va-button>
      <component v-if="ruleIsTrue" :is="getComponent()" />
    </div>
    <div class="flex gap-4 mb-8">
      <code-snippet :code="asyncComponentNotGood" text="Not cool" class="w-50%" />
      <code-snippet :code="asyncComponentGood" text="Cool" class="w-50%" />
    </div>

    <h3>Event Bus</h3>
    <div class="flex gap-4 mb-8">
      <code-snippet :code="eventBusVue" text="Not cool" class="w-50%" />
      <code-snippet :code="eventBusCore" text="Cool" class="w-50%" />
    </div>

    <h3>Optimize your props</h3>
    <div class="flex gap-4 mb-8">
      <a
        href="https://play.vuejs.org/#eNqNU9tu2zAM/RVCwJAU65x27V6yJFhXFEOCdSt2eZr24Np0qkaRBEnOWgT+91FSHLsXdHuyyXNEkUc8W3ZmTLapkY3ZxBVWGA8yV8spZ95xBg59bWZcibXR1sMWLFbQQGX1GgZ0bLCHPgvn5x7XOywbtYlQffCeK64KrZwHQTkH01Bp+IsroKKiHMPRIV18jXIMg0Wu0MMnK6pKqAE0hx3ruGNR/RzO1CPC214Z7dDcCIWwyIuV04+YJx3zjD4yFCvRPuGddrz55h4u81I84bzrOOcLuBQSXSL8PugGzwsvNjgvd7MfETQZJc1JYQpIGCNzjxQBTK5r77WCD4UUxYreo3d8uP9/DccH8CppmklUS3/D2ewL3vnJKBVIxWoZv/TXPksKATZvKm2pfCgBukqlOGvh8Qrvd2gmyl5elM+mowwtEoMemNp+E4+2I7TwKDU6ip1ORj0t2CHtIklYiWV2S9LTqm4Dl7NCrw1pbb8aL0hizsYQkYDlUuo/i5jztsb4WPHMDRarZ/K37i7kOLuy6NBukLM95nO7RJ/gi+9B3R641mUtif0C+A2dlnXoMdE+1qqktnu82O08Okmo5Q93cedRuXao0GhgppXjjBx1/sLoXbsn2Wk8x1VDKvYd+b9+1+qnKekdygeu79nZWG2CnUsks+JViCaxk+ALVa+vaU6KdvZw3tJ8IdG+f0dqZsPolv2Vw+EBTGdprnCZlphJvRzGK2ntiN38w0RStHvvTK5o2UUVlpNMNJ3uWyDHTGdUhRg79nabGoaGpAtbGes83MrmL15ftK4="
        target="_blank"
      >
        Playground
      </a>
    </div>
  </div>
</template>
