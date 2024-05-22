<script lang="ts" setup>
import LayoutsFolderScreen from '~/assets/img/layouts-folder-screen.png'
import {
  appLayoutTemplateSnippet, mainLayoutSnippet,
  registerLayoutSnippet,
  routerLayoutOptionSnippet
} from '~/lib/layout.snippets.ts';
</script>
<template>
  <div class="mb-8">
    <p>In Vue, it is better to place templates in a separate 'Layouts' directory and implement dynamic loading. Template management can be moved to the meta parameters of the router. <br />
    In the layout, we exclusively assign the function of placing components, with the exception of global functions related to this template, such as notifications.</p>
    <img :src="LayoutsFolderScreen" width="230" alt="LayoutsFolderScreen" class="mb-8" />
    <va-tabs>
      <va-tab label="Register Util">
        <code-snippet :code="registerLayoutSnippet" text="register.utils.ts" class="mb-8" />
        <code-snippet :code="mainLayoutSnippet" text="main.ts" />
      </va-tab>
      <va-tab label="App.vue">
        <code-snippet :code="appLayoutTemplateSnippet" />
      </va-tab>
      <va-tab label="Router">
        <code-snippet :code="routerLayoutOptionSnippet" text="[part].router.ts" />
      </va-tab>
    </va-tabs>
  </div>
</template>
