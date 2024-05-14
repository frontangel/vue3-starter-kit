<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { navMenu } from '~/lib/navigation.menu.ts';
import { iMenu } from '~/interfaces/navigation.interface.ts';

const route = useRoute()

const navList = computed(() => {
  const list = []
  for (const item of navMenu) {
    list.push(...item.menu.filter(item => !item.disabled).map(m => {
      Object.assign(m, { category: item.title })
      return m
    }))
  }
  return list as iMenu[]
})

const current = computed(() => navList.value.findIndex(item => item.name === route.name))
const prev = computed(() => current.value > 0 ? navList.value[current.value - 1] : null)
const next = computed(() => current.value < navList.value.length ? navList.value[current.value + 1] : null)
</script>
<template>
  <div class="prev-next-buttons flex justify-between mt-8">
    <router-link v-if="prev" :to="{ name: prev.name }" class="prev-button">
      <div class="cat">{{ prev.category }}</div>
      <div><va-svg-icon icon="arrow-left" size="14" /> {{ prev.text }}</div>
    </router-link>
    <router-link v-if="next" :to="{ name: next.name}" class="next-button">
      <div class="cat">{{ next.category }}</div>
      <div>{{ next.text }} <va-svg-icon icon="arrow-right" size="14" /></div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.prev-next-buttons {
  a {
    display: inline-flex;
    flex-direction: column;
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
    > div {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      line-height: 1rem;
      &.cat {
        letter-spacing: 0;
        font-size: 12px;
        font-weight: 100;
        margin-bottom: 0.25rem;
      }
    }

    &.prev-button {
      padding-left: 1.25rem;
      align-items: flex-end;
    }
    &.next-button {
      padding-right: 1.25rem;
      align-items: flex-start;
      margin-left: auto;
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
