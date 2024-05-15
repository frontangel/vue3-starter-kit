<script lang="ts" setup>
import { useNotify } from '~/utils/notify.utils.ts';
import {
  notificationComponentSnippets,
  notificationStyles,
  notificationsUsage, notifyApp, notifyInApi,
  notifyUseUtil
} from '~/lib/notification.snippets.ts';
const { notify } = useNotify()
</script>
<template>
  <div class="mb-8">
    <div class="gap-2 flex mb-8">
      <va-button variant="info" @click="notify('Hello!')">Say Hello!</va-button>
      <va-button @click="notify({ message: 'Danger! ' + (new Date()).toLocaleString('ua-Uk'), variant: 'danger', showClose: true, delay: 0 })">Show Danger</va-button>
      <va-button @click="notify({ message: 'Danger! ' + (new Date()).toLocaleString('ua-Uk'), variant: 'danger', position: 'right' })">Show Danger right</va-button>
    </div>

    <va-tabs>
      <va-tab label="Usage">
        <code-snippet :code="notificationsUsage" text="Components" class="mb-8" />
        <code-snippet :code="notifyInApi" text="Axios instance" class="mb-8" />
      </va-tab>
      <va-tab label="Step 1">
        <h3 class="!mt-0">Create component</h3>
        <code-snippet :code="notificationComponentSnippets" text="va-notify.vue" />
      </va-tab>
      <va-tab label="Step 2">
        <h3 class="!mt-0">Add styles</h3>
        <code-snippet :code="notificationStyles" text="_notifications.scss" />
      </va-tab>
      <va-tab label="Step 3">
        <h3 class="!mt-0">Create util</h3>
        <code-snippet :code="notifyUseUtil" text="notify.utils.ts" />
      </va-tab>
      <va-tab label="Step 4">
        <h3 class="!mt-0">Add to project global</h3>
        <code-snippet :code="notifyApp" text="App.vue" />
      </va-tab>
    </va-tabs>
  </div>
</template>
