<script lang="ts" setup>
const unoConfig = `import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {
      primary: 'blue'
    },
    breakpoints: {
      xs: '320px',
      sm: '640px',
      md: '960px'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})
`
const rootConfig = `@use "config";

:root {
  // global
  --dark-color: #{map-get(config.$colors, 'dark')};
  --info-color: #{map-get(config.$colors, 'info')};
  --light-info-color: #{map-get(config.$colors, 'light-info')};
  --danger-color:  #{map-get(config.$colors, 'danger')};
  --primary-color:  #{map-get(config.$colors, 'primary')};

  --primary-color-lighten:  #{lighten(map-get(config.$colors, 'primary'), 5%)};
  --white-color: #fff;
  --dark-info-color: #999;

  --border-radius: 8px;
  --h-padding: 1rem;
  --background-color: #ffffff;
  --sidebar-background-color: var(--light-info-color);
  --text-color: #333;

  --notifications-item-height: 40px;
  --notifications-gap: 8px;
  --notifications-danger-bg:  #{lighten(map-get(config.$colors, 'danger'), 43%)};

  // inputs
  --input-border-radius: var(--border-radius);
  --input-border-width: 1px;
  --input-border-color: var(--dark-info-color);
  --input-height: #{map-get(config.$controls-size, 'height')};
  --input-disabled-bg: #{lighten(map-get(config.$colors, 'info'), 5%)};
  --input-checkbox-height: calc(#{map-get(config.$controls-size, 'height')} / 2);
  --input-checkbox-background: var(--info-color);
  --input-checkbox-button-color: var(--dark-info-color);

  // buttons
  --button-bg-color: var(--white-color);
  --button-border-radius: var(--border-radius);
  --button-border-color: var(--dark-info-color);
  --button-text-color: var(--dark-color);
  --button-height: #{map-get(config.$controls-size, 'height')};

  // nav
  --menu-link-color: var(--dark-info-color);
  --menu-link-color-hover: var(--dark-color);
  --menu-link-color-active: var(--primary-color);

  // hr
  --hr-color: #eaeaea;
}
`
const configConfig = `$colors: (
  primary: #f067b0,
  success: #28a745,
  warning: #ffc107,
  danger: #dc3545,
  dark: #3c3a44,
  info: #ededed,
  light-info: #fafafa,
);

$controls-size: (
  height: 44px,
)
`;
</script>

<template>
  <section>
    <h3>Clone the project</h3>
    <code-snippet language="bash" code="git clone git@github.com:frontangel/vue3-starter-kit.git"/>

    <h3>Config UnoCSS <a class="title-link" rel="nofollow" target="_blank" href="https://unocss.dev/guide/config-file">[Documentation]</a></h3>
    <code-snippet language="js" text="uno.config.ts" :code="unoConfig"/>

    <h3>Config SCSS</h3>
    <code-snippet language="css" text="styles/_root.scss" :code="rootConfig"/>
    <code-snippet language="css" text="styles/_config.scss" :code="configConfig"/>
  </section>
</template>

<style lang="scss" scoped>
.project-architecture {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0 0 0 1rem;
  li {
    > ul {
      list-style: none;
      padding: 0 0 0 2rem;
      li {
        b {
          font-style: italic;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
