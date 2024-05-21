<script lang="ts" setup>
import { authStoreSnippet } from '~/lib/store.snippets.ts';
import StateFolderScreen from '~/assets/img/state-folder-screen.png';
</script>
<template>
  <div class="mb-8">
    <h3>The <b class="text-primary uppercase">setup</b> method in Pinia for Vue 3 streamlines state management, boosting code clarity, reactivity, and ease of maintenance.</h3>
    <ul class="no-list !mb-8">
      <li><b>Composition and Reusability:</b> Enhances state logic composition and reusability across components.</li>
      <li><b>TypeScript Support:</b> Excellent integration with TypeScript, providing strict typing and compile-time support.</li>
      <li><b>Code Conciseness:</b> Reduces boilerplate code, making the structure more readable.</li>
      <li><b>Improved Reactivity:</b> Optimizes reactivity and interaction with the DOM.</li>
      <li><b>Easier Testing and Debugging:</b> Promotes better modularity and logic isolation, simplifying testing and debugging.</li>
    </ul>

    <img :src="StateFolderScreen" alt="ApiFolderScreen" width="278" class="mb-8" />

    <code-snippet :code="authStoreSnippet" text="auth.store.ts" />
  </div>
</template>
