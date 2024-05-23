export const tabsUsageSnippet = `<va-tabs>
  <va-tab label="Usage">
    <code-snippet :code="tabsUsageSnippet" />
  </va-tab>
  <va-tab>
    <template #label>
      <span>Tab - <a class="text-amber" href="https://google.com" target="_blank" @click.stop>google</a></span>
    </template>
    <code-snippet :code="rooterMiddlewareSnippet" text="va-tab.vue" />
  </va-tab>
  <va-tab label="Wrapper">
    <code-snippet :code="routerPartSnippet" text="va-tabs.vue" />
  </va-tab>
</va-tabs>`

export const tabsWrapperSnippet = `<script lang="ts" setup>
import {computed, useSlots} from "vue";

const slots = useSlots();
const model = defineModel<number>({ default: 0 })
const slotElements = computed(() => (slots.default ? slots.default() : []).map(mapSlotEl))
const activeComponents = computed(() => slotElements.value[model.value].slot)
function mapSlotEl (slot: any) {
  return {
    label: slot.props?.label,
    labelSlot: slot.children?.label,
    slot
  }
}
</script>

<template>
  <div class="va-tabs">
    <div class="va-tabs__controls">
      <button
        v-for="(el, index) of slotElements"
        :class="{ active: model === index }"
        @click="model = index"
      >
        <component v-if="el.labelSlot" :is="el.labelSlot" :label="el.label || ('Tab ' + index + 1)" :active="model === index" :index="index" />
        <template v-else>{{ el.label || ('Tab ' + index + 1) }}</template>
      </button>
    </div>
    <div class="va-tabs__content" v-auto-animate>
      <component :key="model" :is="activeComponents" />
    </div>
  </div>
</template>

<style lang="scss">
  .va-tabs {
    display: flex;
    flex-direction: column;
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
</style>`

export const tapSnippet = `<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="va-tab">
    <slot />
  </div>
</template>`
