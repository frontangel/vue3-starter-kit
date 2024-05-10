<script lang="ts" setup>
import {useConfigStore} from "~/store/config.store.ts";
import {shallowRef} from "vue";

const { isRendered } = useConfigStore()
const isMoved = shallowRef(false)
</script>
<template>
  <div>
    <div id="teleportPage">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ducimus ea, illo ipsum iste minus
        mollitia! Atque beatae culpa illum in, laboriosam nihil numquam obcaecati odio quas repellendus ut vero!</p>
    </div>
    <teleport v-if="isRendered.footer" :to="isMoved ? '#footer' : '#teleportPage'">
      <va-button @click="isMoved = !isMoved">Move to {{ !isMoved ? '#footer' : '#teleportPage' }}</va-button>
    </teleport>
  </div>
</template>
