<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <main class="">
        <component :is="Component" />
      </main>
    </transition>
  </router-view>
</template>
