<script lang="ts" setup>
  import { authApiSnippet, axiosInstanceSnippet, mockAdapterSnippet, mockAuthSnippet } from '~/lib/api.snippets.ts';
import ApiFolderScreen from '~/assets/img/api-folder-screen.png'
</script>
<template>
  <div class="mb-8">
    <h3>The main tools for working with REST API are:</h3>
    <ul class="no-list !mb-8">
      <li><b>axios</b> - for organizing server requests</li>
      <li><b>axios-mock-adapter</b> - for intercepting server requests and returning mock data</li>
      <li><b>faker-js</b> - for generating mock data</li>
    </ul>

    <img :src="ApiFolderScreen" alt="ApiFolderScreen" width="213" class="mb-8" />

    <va-tabs>
      <va-tab label="instance.ts">
        <code-snippet :code="axiosInstanceSnippet" />
      </va-tab>
      <va-tab label="auth.api.ts">
        <code-snippet :code="authApiSnippet" />
      </va-tab>
      <va-tab label="adapter.mock.ts">
        <code-snippet :code="mockAdapterSnippet" />
      </va-tab>
      <va-tab label="auth.mock.ts">
        <code-snippet :code="mockAuthSnippet" />
      </va-tab>
    </va-tabs>
  </div>
</template>
