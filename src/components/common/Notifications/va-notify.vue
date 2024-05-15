<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import { useAutoAnimate } from '@formkit/auto-animate/vue';
import { INotification, INotificationOptions } from '~/interfaces/notification.interface.ts'

defineExpose({
  showMessage
})

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
        :class="[{ 'show': notification.show }, `is-${notification.variant}`, notification.position]"
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
