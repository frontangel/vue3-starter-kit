<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers, minLength } from '@vuelidate/validators'
import VaButton from '~/components/common/Buttons/va-button.vue'
import {shallowReactive} from "vue";
import { iSignInForm } from '~/interfaces/auth.interfaces.ts';

const form = defineModel<iSignInForm>({ default: shallowReactive({ email: '', password: '' })})

defineProps<{
  loading?: boolean
}>()

defineExpose({
  clear: clearForm
})
const emits = defineEmits(['submit'])

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
  emits('submit', form.value)
}

function clearForm () {
  Object.assign(form.value, { email: '', password: '' })
  v$.value.$reset()
}
</script>

<template>
  <va-form :loading="loading" :rules="v$" @submit="onSubmit">
    <!-- provide variant -->
    <va-input-wrapper label="Email:" prop="email">
      <va-input v-model="form.email" reset-on-input placeholder="mail@domain.com" />
    </va-input-wrapper>

    <!-- prop variant -->
    <va-input-wrapper label="Password:" prop="password" :errors="v$.password.$errors">
      <va-input v-model="form.password" password placeholder="qwerty123" />
    </va-input-wrapper>

    <div class="text-right">
      <va-button :loading="loading" submit>Enter</va-button>
    </div>
  </va-form>
</template>
