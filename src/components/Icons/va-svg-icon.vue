<script lang="ts" setup>
import { computed, defineAsyncComponent, onMounted, shallowRef } from 'vue'
import { whenever } from '@vueuse/core'

const props = withDefaults(defineProps<{
  icon: string
  size?: number | string
  height?: number | string
  width?: number | string
}>(), {
  icon: () => '',
  size: () => 16,
})

const dynamicComponent = shallowRef()
function updateComponent(icon: string) {
  dynamicComponent.value = defineAsyncComponent(() =>
    import(`../../assets/icons/${icon}.svg`)
      .catch(() => import('../../assets/icons/bug.svg'))
  )
}

whenever(() => props.icon,updateComponent)
updateComponent(props.icon)

const iconSize = computed(() => ({
  height: props.height || props.size,
  width: props.width || props.size,
}))

onMounted(() => {})
</script>
<template>
  <span class="svg-icon" :style="`height: ${iconSize.height}px; width: ${iconSize.width}px`">
    <component
      v-if="icon"
      :is="dynamicComponent"
      :height="iconSize.height"
      :width="iconSize.width"
      :class="['svg-icon', `${icon}-icon`]"
    />
  </span>
</template>
