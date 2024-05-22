export const mainLayoutSnippet = `const { registerLayouts } = useRegisterUtils()

// ... your code here

const app = createApp(App)
registerLayouts(app)

// ... your code here`

export const registerLayoutSnippet = `import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'

export default function useRegisterUtils() {
  const registerLayouts = (app: App) => {
    const layouts = import.meta.glob('../layouts/*.vue')

    for (const layout in layouts) {
      const name: string = layout.split('/').pop()?.replace('.vue', '') || ''
      app.component(
        name,
        defineAsyncComponent(() => import('../layouts/' + name + '.vue'))
      )
    }
  }

  return { registerLayouts }
}`

export const appLayoutTemplateSnippet = `<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const layout = computed(() => {
  return (route?.meta?.layout || 'Default') + 'Layout'
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>`

export const appLayoutSnippet = `import { useRoute } from 'vue-router'
const route = useRoute()

const layout = computed(() => {
  return (route?.meta?.layout || 'Default') + 'Layout'
})
`
export const routerLayoutOptionSnippet = `// some router part
export const guideRoutes: any[] = [
  {
    path: '/guide',
    redirect: '/guide',
    name: 'Guide',
    meta: {
      layout: 'Sidebar'
    },
    children: [
      {
        path: '',
        name: 'Introduction',
        component: () => import('~/views/Guide/IntroductionView.vue'),
        meta: {
          title: 'Introduction',
        }
      },
      // ... other routes
    ]
  },
  // ... other routes
]`
