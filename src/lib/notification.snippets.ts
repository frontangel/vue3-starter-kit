export const notifyInApi = `import axios, { AxiosResponse } from 'axios'
import useMock from '~/api/mock/adapter.mock.ts'
import { useNotify } from '~/utils/notify.utils.ts'

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
})

apiInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const message = error.response.data?.message
    if (message) {
      notify({ message, variant: 'danger', delay: 4000 })
    }
    return Promise.reject(error);
  }
)

export default apiInstance
`

export const notifyApp = `<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { useEventBus } from '@vueuse/core'
import { INotificationOptions } from '~/interfaces/notification.interface.ts'

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

onBeforeUnmount(unsubscribe)
</script>

<template>
  <router-view />
  <va-notify ref="notifyRef" />
</template>`

export const notifyUseUtil = `import { useEventBus } from '@vueuse/core';
import { INotificationOptions } from '~/interfaces/notification.interface.ts';

export function useNotify() {
  function notify(payload: string | INotificationOptions) {
    const notificationsBus = useEventBus<string>('notification')

    const options: INotificationOptions = {
      message: ''
    }
    if (typeof payload === 'string') {
      options.message = payload
    } else {
      Object.assign(options, payload)
    }

    notificationsBus.emit('notify', options)
  }

  return { notify }
}`


export const notificationStyles = `.va-notifications {
  position: fixed;
  top: 2rem;
  height: 0;
  left: 4rem;
  right: 4rem;
  display: flex;
  gap: var(--notifications-gap);
  flex-direction: column;
  z-index: 1000;
  &__item {
    opacity: 1;
    display: flex;
    width: fit-content;
    padding: 0.75rem 1rem;
    box-shadow: 0 10px 16px 0 rgba(0,0,0, 0.1);
    justify-content: space-between;
    align-items: center;
    border-radius: 2px;
    gap: 1rem;
    min-width: 200px;
    white-space: nowrap;
    background-color: var(--notification-info-bg);
    align-self: center;
    &.right {
      align-self: flex-end;
    }
    &.is-danger {
      color: var(--danger-color);
      background-color: var(--notifications-danger-bg);
    }
  }
}`

export const notificationsUsage = `<script lang="ts" setup>
import { useNotify } from '~/utils/notify.utils.ts'
const { notify } = useNotify()
</script>

<template>
  <va-button variant="info" @click="notify('Hello!')">Say Hello!</va-button>
  <va-button @click="notify({ message: 'Danger! ' + (new Date()).toLocaleString('ua-Uk'), variant: 'danger', showClose: true, delay: 0 })">Show Danger</va-button>
  <va-button @click="notify({ message: 'Danger! ' + (new Date()).toLocaleString('ua-Uk'), variant: 'danger', position: 'right' })">Show Danger right</va-button>
</template>`

export const notificationComponentSnippets = `<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { INotification, INotificationOptions } from '~/interfaces/notification.interface.ts'

defineExpose({ showMessage })

const state = reactive({
  notifications: [] as INotification[]
})

function showMessage (options: Partial<INotificationOptions>) {
  const instance = {
    id: Date.now(),
    message: options.message || '',
    variant: options.variant || 'info',
    counter: ref(0),
    show: ref(false),
    isDeleted: false,
    showClose: options.showClose || false,
    delay: options.delay === 0 && options.showClose ? 0 : options.delay || 4000,
    position: options.position || 'center',
    timeout: useIntervalFn(() => {
      instance.counter.value++
      if (instance.delay && instance.counter.value > instance.delay / 100) {
        instance.timeout.pause()
        remove(instance)
      }
    }, 100)
  }
  state.notifications.push(instance)
}

function autoDelete() {
  if (state.notifications.every(item => item.isDeleted)) {
    state.notifications = []
  }
}

function remove(instance: INotification) {
  state.notifications = state.notifications.filter(n => n.id !== instance.id)
  autoDelete()
}
function onHover(instance: INotification) {
  if (!instance.delay) return
  instance.timeout.pause()
}
function onLeave(instance: any) {
  if (!instance.delay) return
  instance.timeout.resume()
}

const [notificationsRef] = useAutoAnimate()
</script>

<template>
  <teleport to="body">
    <div ref="notificationsRef" class="va-notifications">
      <div
        v-for="notification of state.notifications"
        :key="notification.id"
        :class="[{ 'show': notification.show }, 'is-' + notification.variant, notification.position]"
        class="va-notifications__item"
        @mouseover="onHover(notification)"
        @mouseleave="onLeave(notification)"
      >
        <span>{{ notification.message }}</span>
        <va-button v-if="notification.showClose" :variant="notification.variant as any" link @click="remove(notification)" style="height: initial"><va-svg-icon icon="xmark" :size="16" /></va-button>
      </div>
    </div>
  </teleport>
</template>
`
