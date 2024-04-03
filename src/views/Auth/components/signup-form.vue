<script lang="ts" setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { useAuthStore } from '~/store/auth.store.ts'
interface Form {
  email: string
  password: string
  confirmPassword: string
}

const authStore = useAuthStore()
const form = reactive<Form>({
  email: '',
  password: '',
  confirmPassword: ''
})
const rules = {
  email: {
    email: helpers.withMessage('Email not valid', email),
    required: helpers.withMessage('Email is require', required)
  },
  password: { required: helpers.withMessage('Password is require', required) }
}

const v$ = useVuelidate(rules, form)

async function onSubmit() {
  const valid = await v$.value.$validate()
  if (!valid) return
  await authStore.signIn(form)
}
</script>

<template>
  <form class="my-form" @submit.prevent="onSubmit">
    <va-input-wrapper label="Email:" :errors="v$.email.$errors">
      <va-input v-model="form.email" placeholder="Enter email" />
    </va-input-wrapper>

    <va-input-wrapper label="Password:" :errors="v$.password.$errors">
      <va-input v-model="form.password" password placeholder="Enter password" />
    </va-input-wrapper>

    <va-input-wrapper label="Confirm password:" :errors="v$.confirmPassword.$errors">
      <va-input v-model="form.confirmPassword" password placeholder="Confirm password" />
    </va-input-wrapper>

    <div class="text-right">
      <button class="va-button" type="submit">Confirm</button>
    </div>
  </form>
</template>
