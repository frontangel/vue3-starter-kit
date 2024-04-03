<script setup lang="ts">
import LoginForm from '~/views/Auth/components/signin-form.vue'
import { useAuthStore } from '~/store/auth.store.ts'
import { iSignInForm } from '~/api/auth.api.ts'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

function onSubmit(payload: iSignInForm) {
  authStore.signIn(payload).then(() => router.push({ name: 'Dashboard' }))
}
</script>

<template>
  <div class="">
    <h1>Sign In</h1>
    <login-form ref="loginForm" :loading="authStore.loading" @submit="onSubmit" />
  </div>
</template>
