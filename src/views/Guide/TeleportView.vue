<script lang="ts" setup>
import {useConfigStore} from "~/store/config.store.ts";
import { teleportComponentsSnippet, usageTeleportSnippet } from '~/lib/teleport.snippets.ts';
const configStore = useConfigStore()
</script>
<template>
  <div>
    <p>The problem with the standard <b class="text-primary">Teleport</b> in Vue is that it doesn't check for the presence of the target element before moving the content. Therefore, I propose creating a custom component based on the standard <b class="text-primary">Teleport</b>.</p>

    <code-snippet :code="teleportComponentsSnippet" text="va-teleport.vue" class="mb-8" />
    <code-snippet :code="usageTeleportSnippet" text="Usage" class="mb-8" />

    <va-button @click="configStore.toggleMove" class="mb-8">Move {{ !configStore.isMoved ? 'to #footer' : 'back' }}</va-button>
  </div>
</template>
