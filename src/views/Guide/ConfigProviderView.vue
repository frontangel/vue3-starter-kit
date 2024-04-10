<script lang="ts" setup>
import { inject } from 'vue'
import { useConfigStore } from '~/store/config.store.ts'

const globalOptions = inject<any>('globalOptions', { allFieldsClearable: false })
const configStore = useConfigStore()

const insideCode = `<script lang="ts" setup>
import { provide, shallowRef } from 'vue'
import { iConfig } from '~/interfaces/config.interface.ts'

const props = withDefaults(defineProps<{
  options?: iConfig
}>(), {
  options: () => ({
    allFieldsClearable: false
  })
})

const globalOptions = shallowRef(props.options)
provide('globalOptions', globalOptions)
<\/script>

<template>
  <slot \/>
<\/template>`

const useCodeGlobal = `<global-provide-config :options="{ allFieldsClearable: false }">
  <component :is="layout">
    <router-view />
  </component>
</global-provide-config>`

const useCodeComponents = `<global-provide-config :options="{ allFieldsClearable: false }">
  <your-component />
</global-provide-config>`


</script>

<template>
  <div class="">
    <p>This component is used to provide global configuration options within a Vue application. It allows child components to access shared settings without the need to pass props through multiple levels or rely on a global state.</p>
    <va-form class="mb-8">
      <va-input-wrapper label="Example:">
        <va-input model-value="John Doe" />
      </va-input-wrapper>
      <va-button class="mr-4" @click="configStore.$patch({ allFieldsClearable: !globalOptions.allFieldsClearable })">Make field clearable</va-button>
      <span>{{ globalOptions }}</span>
    </va-form>

    <h3>Inside component</h3>
    <code-snippet :code="insideCode" text="global-provide-config.vue" />

    <h3>How to use</h3>
    <code-snippet :code="useCodeGlobal" text="App.vue" />
    <code-snippet :code="useCodeComponents" text="YourComponents.vue" />
  </div>
</template>
