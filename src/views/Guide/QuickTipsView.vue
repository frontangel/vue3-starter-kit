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
        href="https://play.vuejs.org/#eNqNVE1v2zAM/SuEgSIOljjp2l6yJFhXFEOCdSv2cZp2cGw5VSNLgiRnLQL/91GSHXtt0e1kkXykyCc+H6JLpZJ9RaNZNDeZZsoCT8V2QSJrSASG2kotiWClktrCATQtoIZCyxIGmDY4hj4xY1eWlk0smbQOV33wjggiMimMBYY+AwtXKf5JBGBRls9gOsKLN5TPYLBOBbXwUbOiYGIA9ahDnXYorJ/CpXgCeNsrIw1Vd0xQWKfZzsgnyLMOeYkf7orlVD/DnXe41f4RbtKcPcNcdJirNdwwTk0A/Bp2g6eZZXu6ypvZpxiaTwLnyDAaSIziqaVoAcw3lbVSwPuMs2yH79FLj4/nN3A6hJPAacKp2No7Ei0/0wc7n4QCoVjF/RdP7bMEE2A/LqTG8q4EyCKUIlEbnu3oYxNNWN7zs/xFt6ehjXijFwxtj31qO0IbnoRGJ77T+eTIRTTCTUQCC7ZN7pF4XNSDQ5Iok6VCpvUXZRkSTKIZ+IiLpZzL32vvs7qi/ql8zh3Ndi/4782D85HoVlND9Z6S6Bizqd5SG8LX3xy3vWAp84oj+pXgV2okr1yPAfahEjm23cP5bldeR0xsv5vrB0uFaYdyjTpkWDgSoZ6uXhm9a/csOfd5RNTIYl+P/6t2KX6oHF8h/0vzPTErLZUTc05RqvTWWXPfiVOFqMoNzolWIw5jNc7nHO3rd6B6GXutHK+M4yEslmEud5nkNOFyG/srcekQXf9DQpy1W29UKnDVWeFWEyW0WBxbQL0sllgFEQ36cAgNQ43UuZ30dXo76a8y9pG7I2ehR478jr0Th5KCIksAKs1zHBl/b8nbC40Kmwa3NMy93Az/BFgR+/Bu32XzkF0m5obUJrmfnm78boV07IEWFjMay0qFv6bpSWvqVBgUe+lWCo9ulHh8Op2ejGCMsKHHuW3xrPrxovoPMe39ag=="
        target="_blank"
      >
        Playground
      </a>
    </div>
  </div>
</template>
