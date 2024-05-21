<script lang="ts" setup>
import ViewsFolderScreen from '~/assets/img/views-folder-screen.png'
import { loginPageViewSnippet } from '~/lib/view.snippets.ts';
</script>
<template>
  <div class="mb-8">
    <h3><span class="text-primary">Views</span> folder is responsible for displaying content, composition, data handling, routing, user interaction, and styling for a specific page.</h3>
    <ul class="no-list !mb-8">
      <li><b>Content Display:</b> Responsible for showing the main content of the page when navigating to the corresponding route.</li>
      <li><b>Composition Logic:</b> Contains components and UI elements that make up the page.</li>
      <li><b>Data Handling:</b> Interacts with Vuex or APIs to fetch and process data displayed on the page.</li>
      <li><b>Routing:</b> Associated with a specific route, determining when the page should be loaded and displayed.</li>
      <li><b>Events and Interaction:</b> Contains event handlers and methods for user interaction with the interface.</li>
      <li><b>Styles and Animations:</b> Contains unique styles and animations applied only to this page.</li>
    </ul>

    <img :src="ViewsFolderScreen" alt="ViewsFolderScreen" width="230">

    <p>For convenience, unique components that pertain exclusively to the page can be placed in this folder.</p>

    <code-snippet :code="loginPageViewSnippet" text="SignInView.vue" />
  </div>
</template>
