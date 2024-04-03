<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
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
    delay: options.delay === 0 ? 0 : options.delay || 4000,
    timeout: useIntervalFn(() => {
      instance.counter.value++
      if (instance.counter.value > instance.delay / 100) {
        instance.timeout.pause()
        instance.isDeleted = true
      }
      instance.show.value = !instance.isDeleted && instance.counter.value < instance.delay / 100

      if (!instance.delay) {
        instance.show.value = true
        instance.isDeleted = false
      }
      autoDelete()
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
  instance.isDeleted = true
  instance.show = ref(false)
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

</script>
<template>
  <teleport v-if="state.notifications.length" to="body">
    <div class="va-notifications">
      <div class="va-notifications__wrap">
        <div
          v-for="notification of state.notifications"
          :key="notification.id"
          :class="[{ 'show': notification.show }, `is-${notification.variant}`]"
          class="va-notifications__item"
          @mouseover="onHover(notification)"
          @mouseleave="onLeave(notification)"
        >
          <span>{{ notification.message }}</span>
          <va-button :variant="notification.variant as any" link @click="remove(notification)"><va-svg-icon icon="xmark" :size="16" /></va-button>
        </div>
      </div>
    </div>
  </teleport>
</template>
