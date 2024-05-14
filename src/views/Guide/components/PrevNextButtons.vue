<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { navMenu } from '~/lib/navigation.menu.ts';

const route = useRoute()

const navList = computed(() => {
  const list = []
  for (const item of navMenu) {
    list.push(...item.menu.filter(item => !item.disabled))
  }
  return list
})

const current = computed(() => navList.value.findIndex(item => item.to === route.path))
const prev = computed(() => current.value > 0 ? navList.value[current.value - 1] : null)
const next = computed(() => current.value < navList.value.length ? navList.value[current.value + 1] : null)
</script>
<template>
  <div class="prev-next-buttons flex justify-between mt-8">
    <router-link v-if="prev" :to="prev.to" class="prev-button">
      <va-svg-icon icon="arrow-left" /> {{ prev.text }}
    </router-link>
    <router-link v-if="next" :to="next.to" class="next-button">
      {{ next.text }} <va-svg-icon icon="arrow-right" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.prev-next-buttons {
  a {
    display: inline-flex;
    text-decoration: none;
    border: 1px solid var(--hr-color);
    padding: 0.75rem 1.5rem;
    color: var(--dark-info-color);
    border-radius: 0.5rem;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.5px;
    font-size: 14px;
    font-weight: 500;
    gap: 0.5rem;
    &.prev-button {
      padding-left: 1.25rem;
    }
    &.next-button {
      padding-right: 1.25rem;
    }
    &:hover {
      color: var(--text-color);
      border-color: var(--primary-color);
      .svg-icon {
        color: var(--primary-color);
      }
    }
  }
}
</style>
