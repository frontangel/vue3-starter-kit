<script lang="ts" setup>
const model = defineModel<boolean>()
</script>
<template>
  <div class="va-switcher" @click="model = !model">
    <div class="va-switcher__prefix">prefix</div>
    <div class="va-switcher__control">
      <input v-model="model" type="checkbox" />
      <div class="va-switcher__button" />
    </div>
    <div class="va-switcher__suffix">suffix</div>
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
      height: 1rem;
      width: 100%;
      left: 0;
      top: 50%;
      background-color: var(--input-checkbox-background);
      border-radius: 50px;
      transform: translateY(-50%);
    }
    input {
      position: absolute;
      height: 0;
      width: 0;
      z-index: 0;
      visibility: hidden;
      &:checked {
        + .va-switcher__button {
          left: calc(100% - var(--input-checkbox-height));
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
    left: 0;
    top: 0;
    transition: all .2s ease-in-out;
  }
}
</style>
