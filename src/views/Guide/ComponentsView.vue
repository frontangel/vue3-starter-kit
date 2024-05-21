<script lang="ts" setup>
import ComponentsFolderScreen from '~/assets/img/components-folder-screen.png'
import { viteConfigComponentSnippet } from '~/lib/component.snippets.ts';
</script>
<template>
  <div class="mb-8">
    <div class="flex gap-4 mb-8">
      <div class="image">
        <img :src="ComponentsFolderScreen" alt="ComponentsFolderScreen" width="230">
      </div>

      <div class="">
        <h3 class="mb-1 mt-0"><span class="text-primary">[components]</span> Folder</h3>
        <p class="mt-0">The components folder contains reusable components used throughout your application. It is divided into two subfolders: common and features.</p>

        <h3 class="mb-1"><span class="text-primary">[common]</span> Subfolder</h3>
        <p class="mt-0">Contains common components that are used on many pages of the application. These components are universal and can be utilized in various parts of the application.</p>

        <h3 class="mb-1"><span class="text-primary">[features]</span> Subfolder</h3>
        <p class="mt-0">Contains components that implement specific functionalities of the application. These components are usually used to realize unique features and interactive elements.</p>

        <p><b>Thus, the components folder is organized to logically separate common components from those that implement specific application features, making code development and maintenance more convenient and understandable.</b></p>
      </div>
    </div>


    <h3 class="mb-1">Auto-importing Components</h3>
    <p class="mt-0">You can organize auto-importing of components using <b>vite.config.ts</b>. This can be achieved by configuring Vite to automatically resolve and import components from the components folder:</p>
    <code-snippet :code="viteConfigComponentSnippet" text="vite.config.ts" />
  </div>
</template>

<style lang="scss" scoped>
.image {
  min-width: 230px;
}
</style>
