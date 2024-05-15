<script lang="ts" setup>
import {computed, provide, useSlots} from "vue";
withDefaults(defineProps<{
  controlsPosition?: 'top' | 'bottom'
}>(), {
  controlsPosition: () => 'top'
})

const slots = useSlots();
const model = defineModel<number>({ default: 0 })
const slotElements = computed(() => (slots.default ? slots.default() : []).map(mapSlotEl));
function mapSlotEl (slot: any) {
  return {
    label: slot.props?.label,
    labelSlot: slot.children?.label,
    slot
  }
}
provide('tabsOptions', {
  tab: model
})
</script>

<template>
  <div class="va-tabs" :class="[`controls-${controlsPosition}`]">
    <div class="va-tabs__controls">
      <button
        v-for="(el, index) of slotElements"
        :class="{ active: model === index }"
        @click="model = index"
      >
        <component v-if="el.labelSlot" :is="el.labelSlot" :label="el.label || `Tab ${index + 1}`" :active="model === index" :index="index" />
        <template v-else>{{ el.label || `Tab ${index + 1}` }}</template>
      </button>
    </div>
    <div class="va-tabs__content" v-auto-animate>
      <template v-for="(el, index) of slotElements" :key="index">
        <component v-if="index === model" :is="el.slot" />
      </template>
    </div>
  </div>
</template>

<style lang="scss">
  .va-tabs {
    display: flex;
    flex-direction: column;
    &.controls-bottom {
      flex-direction: column-reverse;
    }
    &__controls {
      display: flex;
      gap: 2px;
      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0.25rem 0.75rem;
        border: 0;
        background: var(--info-color);
        color: var(--dark-color);
        border-radius: 4px 4px 0 0;
        &.active {
          background: var(--primary-color);
          color: white;
        }
      }
    }
    &__content {
      border: 1px solid var(--primary-color);
      border-radius: 0 0 4px 4px;
      padding: 1rem;
    }
  }
</style>
