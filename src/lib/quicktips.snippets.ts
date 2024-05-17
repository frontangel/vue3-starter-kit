export const notGoodVModel = `const props = withDefaults(defineProps<{
  modelValue: string
}>(), {
  modelValue: () => '(none)'
})

const emit = defineEmits(['update:modelValue'])

// usage
function updateModelValue(value: string) {
  emit('update:modelValue', value)
}`

export const goodVModel = `const model = defineModel<string>({ default: '(none)' })

// usage
model.value = 'new value'`

export const notGoodLocalstorage = `import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import AuthApi from '~/api/auth.api.ts'
import { iSignInForm } from '~/interfaces/auth.interfaces.ts';

// Write to localstorage
const syncWithLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

// Read form localstorage
const loadFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: loadFromLocalStorage('accessToken') || '',
  }),
  actions: {
    async signIn() {
      const response = await AuthApi.signIn(payload)
      accessToken.value = response.accessToken
      syncWithLocalStorage('accessToken', response.accessToken)
    }, 
    logout () {
      accessToken.value = ''
      syncWithLocalStorage('accessToken', '')
    }
  }
})`


export const goodLocalstorage = `import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import AuthApi from '~/api/auth.api.ts'
import { iSignInForm } from '~/interfaces/auth.interfaces.ts';

export const useAuthStore = defineStore('auth', () => {
  const accessToken = useLocalStorage('accessToken', '')

  const signIn = async (payload: iSignInForm) => {
    const response = await AuthApi.signIn(payload)
    accessToken.value = response.accessToken
  }
  
  const logout = () => {
    accessToken.value = ''
  }

  return {
    accessToken,
    signIn,
    logout
  }
})`

export const asyncComponentGood = `<script lang="ts" setup>
import { ref } from 'vue'
import ThemeSwitcher from './ThemeSwitcher.vue'

const ruleIsTrue = ref(false)
</script>

<template>
  <va-button @click="ruleIsTrue = !ruleIsTrue">
    Toggle rule
  </va-button>
  <component v-if="ruleIsTrue" :is="getComponent()" />
</template>`

export const asyncComponentNotGood = `<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';

const getComponent = () => 
  defineAsyncComponent(() => 
    import('~/components/features/ThemeSwitcher.vue')
  )
  
const ruleIsTrue = ref(false)
</script>

<template>
  <va-button @click="ruleIsTrue = !ruleIsTrue">
    Toggle rule
  </va-button>
  <va-switcher v-if="ruleIsTrue" />
</template>`


export const eventBusVue = `
// eventBus.ts
import { createApp } from 'vue'
const eventBus = createApp({})
export default eventBus


// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import eventBus from './eventBus'

const app = createApp(App)
app.config.globalProperties.$eventBus = eventBus
app.mount('#app')


// Usage
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()!

proxy.$eventBus.$on('my-event', onMyEvent);

// fire an event
proxy.$eventBus.$emit('my-event', { message: 'Hello from emitter!' })

const onMyEvent = (data: { message: string }) => {
  console.log('message: ' + data.message')
};


onBeforeUnmount(() => {
  proxy.$eventBus.$off('my-event', onMyEvent);
});
`

export const eventBusCore = `import { useEventBus } from '@vueuse/core'

const bus = useEventBus<string>('news')

// listen to an event
const unsubscribe = bus.on(listener)

function listener(event: string) {
  console.log(\`news: ${event}\`)
}

// fire an event
bus.emit('The Tokyo Olympics has begun')

// unregister the listener
onBeforeUnmount(() => {
  unsubscribe()
})`
