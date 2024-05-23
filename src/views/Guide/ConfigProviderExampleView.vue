<script lang="ts" setup>
import { configComponentsSnippet, configInputSnippet, configUsageSnippet } from '~/lib/config.snippets.ts';
import { useConfigStore } from '~/store/config.store.ts';

const configStore = useConfigStore()
</script>
<template>
  <div class="mb-8">
    <p>The ConfigProvider component is a custom component designed to provide global configuration and settings to its child components. It acts as a central place to define and manage application-wide settings, ensuring that all child components have access to these configurations without the need for repetitive and scattered code.</p>

    <h3>Key Features:</h3>

    <p><b>Global Configuration Management:</b><br>
      Allows you to define global settings that can be accessed by any child component, ensuring consistent behavior and styling across the application. </p>

    <p><b>Context Provider:</b><br>
      Utilizes Vue's provide/inject mechanism to make configuration data available to all nested components within the provider's tree.</p>

    <p><b>Customization and Theming:</b><br>
      Facilitates the implementation of custom themes and styles by providing a central location to define theme-related properties.</p>

    <p><b>Dynamic Updates:</b><br>
      Enables dynamic updates to the configuration, allowing changes to propagate through the component tree in real-time.</p>

    <p><b>Ease of Use:</b><br>
      Simplifies the process of managing configuration settings, reducing the need for redundant props and improving maintainability.</p>

    <va-tabs>
      <va-tab label="Usage">
        <div class="flex gap-4 mb-8">
          <va-switcher v-model="configStore.config.allFieldsClearable" suffix="All fields clearable" />
          <va-input model-value="Hello" class="w-lg" />
        </div>
        <code-snippet :code="configUsageSnippet" text="App.vue" />
      </va-tab>

      <va-tab label="Config Provider">
        <code-snippet :code="configComponentsSnippet" text="config-provider.vue" />
      </va-tab>

      <va-tab label="Input example">
        <code-snippet :code="configInputSnippet" />
      </va-tab>
    </va-tabs>
  </div>
</template>
