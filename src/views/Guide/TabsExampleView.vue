<script lang="ts" setup>
  import { tabsUsageSnippet, tabsWrapperSnippet, tapSnippet } from '~/lib/tabs.snippets.ts';

</script>
<template>
  <div class="mb-8">
    <p>One way of designing a component involves the properties of child components affecting the parent. This allows for a sort of automatic configuration.</p>
    <p>As you can see, in the tab switcher, the tabs are formed according to the props of the child components</p>

    <va-tabs>
      <va-tab label="Usage">
        <code-snippet :code="tabsUsageSnippet" />
      </va-tab>
      <va-tab>
        <template #label>
          <span>Tab - <a class="text-amber" href="https://google.com" target="_blank" @click.stop>google</a></span>
        </template>
        <code-snippet :code="tapSnippet" />
      </va-tab>
      <va-tab label="Wrapper">
        <code-snippet :code="tabsWrapperSnippet" />
      </va-tab>
    </va-tabs>
  </div>
</template>
