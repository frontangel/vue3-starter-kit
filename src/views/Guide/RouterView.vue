<script lang="ts" setup>
  import { indexRouterSnippet, rooterMiddlewareSnippet, routerPartSnippet } from '~/lib/router.snippets.ts';
  import RouterFolderScreen from '~/assets/img/router-folder-screen.png';
</script>

<template>
  <div>
    <h3>For convenience, a router can be divided into three main components:</h3>
    <ul class="no-list !mb-8">
      <li><b>parts</b> - sections of the router</li>
      <li><b>middleware</b> - a directory used to store middleware functions that perform validation or modification of requests before they reach the final handlers</li>
      <li><b>index.ts</b> - the main file that typically assembles all the parts and middleware into a single router</li>
    </ul>

    <img :src="RouterFolderScreen" alt="ApiFolderScreen" width="230" class="mb-8" />

    <va-tabs>
      <va-tab label="router">
        <code-snippet :code="indexRouterSnippet" text="index.ts" />
      </va-tab>
      <va-tab label="parts">
        <code-snippet :code="routerPartSnippet" text="auth.rotes.ts" />
      </va-tab>
      <va-tab label="middleware">
        <code-snippet :code="rooterMiddlewareSnippet" text="auth.middleware.ts" />
      </va-tab>
    </va-tabs>
  </div>
</template>
