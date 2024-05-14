<script setup lang="ts">
import { useAuthStore } from '~/store/auth.store.ts'
import VaEmpty from '~/components/common/Placeholders/va-empty.vue'
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

function onLogout() {
  authStore.logout()
  router.push({ name: 'LoginExample' })
}
</script>

<template>
  <div>
    <div class="mb-8">
      <va-empty content="You are is logged in">
        <va-button @click="onLogout">Logout</va-button>
      </va-empty>
    </div>
  </div>
</template>
