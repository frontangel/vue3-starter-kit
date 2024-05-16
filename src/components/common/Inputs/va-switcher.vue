<script lang="ts" setup>
import { computed } from 'vue'

const model = defineModel<boolean>()
const props = defineProps<{
  prefix?: string
  suffix?: string
  icon?: string
  inactiveBtnBg?: string
  inactiveBtnColor?: string
  activeBtnBg?: string
  activeBtnColor?: string
}>()

const styles = computed(() => ({
  backgroundColor: model.value ? props.activeBtnBg : props.inactiveBtnBg,
  color: model.value ? props.activeBtnColor : props.inactiveBtnColor,
}))
</script>
<template>
  <div class="va-switcher" :class="{ 'is-checked': model }" @click="model = !model">
    <div v-if="prefix" class="va-switcher__prefix">{{ prefix }}</div>
    <div class="va-switcher__control">
      <input v-model="model" type="checkbox" />
      <div class="va-switcher__button" :style="styles"><va-animated-icon v-if="icon" :icon="icon" /></div>
    </div>
    <div v-if="suffix" class="va-switcher__suffix">{{ suffix }}</div>
  </div>
</template>

<style lang="scss">
.va-switcher {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  &__control {
    display: flex;
    position: relative;
    height: var(--input-checkbox-height);
    width: 3rem;
    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      height: calc(100% + 4px);
      width: calc(100% + 4px);
      left: 50%;
      top: 50%;
      background-color: var(--white-color);
      border-radius: 50px;
      border: 1px solid var(--input-border-color);
      transform: translate(-50%, -50%);
    }
    input {
      position: absolute;
      height: 0;
      width: 0;
      z-index: 0;
      visibility: hidden;
      &:checked {
        + .va-switcher__button {
          left: calc(100% - var(--input-checkbox-height) - 1px);
          background-color: var(--primary-color);
        }
      }
    }
  }
  &__button {
    z-index: 2;
    height: var(--input-checkbox-height);
    width: var(--input-checkbox-height);
    background-color: var(--input-checkbox-button-color);
    border-radius: 50px;
    position: absolute;
    left: 1px;
    top: 0;
    transition: all .2s ease-in-out;
    > * {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &.is-checked {
    .va-switcher {
      &__control {
        &:before {
          border-color: var(--primary-color-lighten);
        }
      }
    }
  }
}
</style>
