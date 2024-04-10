<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onBeforeUnmount, ref } from 'vue'
import GlobalProvideConfig from '~/components/Provide/global-provide-config.vue'
import VaNotify from '~/components/Notifications/VaNotify.vue'
import { useEventBus } from '@vueuse/core'
import { INotificationOptions } from '~/interfaces/notification.interface.ts'
import { useConfigStore } from '~/store/config.store.ts'

const configStore = useConfigStore()
const route = useRoute()

const notificationsBus = useEventBus<string>('notification')
const unsubscribe = notificationsBus.on(notificationsListener)
const notifyRef = ref()

function notificationsListener(event: string, payload: any) {
  switch (event) {
    case 'notify':
      notifyRef.value.showMessage(payload as INotificationOptions)
      break
    default:
      console.log(event, payload)
      break
  }
}

const layout = computed(() => {
  return `${route?.meta?.layout || `Default`}Layout`
})
onBeforeUnmount(() => {
  unsubscribe()
})
</script>

<template>
  <global-provide-config :options="configStore.$state">
    <component :is="layout">
      <router-view />
    </component>
  </global-provide-config>
  <va-notify ref="notifyRef" />
</template>

