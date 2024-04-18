<script lang="ts" setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength } from '@vuelidate/validators'
import { iSignInForm } from '~/api/auth.api.ts'
import VaButton from '~/components/common/Buttons/va-button.vue'

defineProps<{
  loading?: boolean
}>()

defineExpose({
  clear: clearForm
})
const emits = defineEmits(['submit'])

const form = reactive<iSignInForm>({
  email: 'va@devurai.com',
  password: 'qwerty123VIP'
})

const rules = {
  email: {
    email: helpers.withMessage('Email not valid', email),
    required: helpers.withMessage('Email is require', required)
  },
  password: {
    required: helpers.withMessage('Password is require', required),
    minLength: minLength(8)
  }
}

const v$ = useVuelidate(rules, form)

async function onSubmit() {
  const valid = await v$.value.$validate()
  if (!valid) return
  emits('submit', form)
}

function clearForm () {
  Object.assign(form, { email: '', password: '' })
  v$.value.$reset()
}
</script>

<template>
  <va-form :loading="loading" :rules="v$" @submit="onSubmit">
    <!-- provide variant -->
    <va-input-wrapper label="Email:" prop="email">
      <va-input v-model="form.email" reset-on-input placeholder="Enter email" />
    </va-input-wrapper>

    <!-- prop variant -->
    <va-input-wrapper label="Password:" prop="password" :errors="v$.password.$errors">
      <va-input v-model="form.password" password placeholder="Enter password" />
    </va-input-wrapper>

    <div class="text-right">
      <va-button :loading="loading" submit>Enter</va-button>
    </div>
  </va-form>
</template>
