<script lang="ts" setup>
import {useConfigStore} from "~/store/config.store.ts";
import {shallowRef} from "vue";

const configStore = useConfigStore()
const isMoved = shallowRef(false)
</script>
<template>
  <div>
    <div id="teleportPage">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ducimus ea, illo ipsum iste minus
        mollitia! Atque beatae culpa illum in, laboriosam nihil numquam obcaecati odio quas repellendus ut vero!</p>
    </div>
    <template v-if="configStore.isRendered.footer && isMoved">
      <teleport to="#footer">
        <va-button @click="isMoved = !isMoved">Move to {{ !isMoved ? '#footer' : '#teleportPage' }}</va-button>
      </teleport>
    </template>
    <template v-else>
      <va-button @click="isMoved = !isMoved">Move to {{ !isMoved ? '#footer' : '#teleportPage' }}</va-button>
    </template>
  </div>
</template>
