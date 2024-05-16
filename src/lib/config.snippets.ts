export const configInputSnippet = `<script lang="ts" setup>
import VaSvgIcon from '~/components/common/Icons/va-svg-icon.vue'
import { inject } from 'vue'

const model = defineModel<string>()
const globalOptions = inject('globalOptions', { allFieldsClearable: false })

function clearField() {
  model.value = ''
}
</script>

<template>
  <div class="va-form__item">
    <input v-model="model" type="text" @input="onInput" />

    <button v-if="globalOptions.allFieldsClearable" @click.prevent.stop="clearField">
      <va-svg-icon :icon="xmark" :size="16" />
    </button>
  </div>
</template>`

export const configComponentsSnippet = `<script lang="ts" setup>
import { provide, ref } from 'vue';
import { iConfig } from '~/interfaces/config.interface.ts';

const props = withDefaults(defineProps<{
  options?: iConfig
}>(), {
  options: () => ({
    allFieldsClearable: false
  })
})

const globalOptions = ref(props.options)
provide('globalOptions', globalOptions)
</script>

<template>
  <slot />
</template>`

export const configUsageSnippet = `<script setup lang="ts">
import GlobalProvideConfig from '~/components/common/Config/global-provide-config.vue'
import { useConfigStore } from '~/store/config.store.ts'

const configStore = useConfigStore()
</script>

<template>
  <global-provide-config :options="configStore.config">
    <router-view />
  </global-provide-config>
</template>
`
