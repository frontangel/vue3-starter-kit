<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'

const props = withDefaults(defineProps<{
  icon: string
  size?: number | string
  height?: number | string
  width?: number | string
}>(), {
  icon: () => '',
  size: () => 16,
})

const dynamicComponent = defineAsyncComponent(() =>
  import(`../../assets/icons/${props.icon}.svg`)
    .catch(() => import('../../assets/icons/bug.svg'))
)

const iconSize = computed(() => ({
  height: props.height || props.size,
  width: props.width || props.size,
}))

</script>
<template>
  <component
    v-if="icon"
    :is="dynamicComponent"
    :height="iconSize.height"
    :width="iconSize.width"
    :class="['svg-icon', `${icon}-icon`]"
  />
</template>

