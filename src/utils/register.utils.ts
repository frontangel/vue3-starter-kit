import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'

export default function useRegisterUtils() {
  const registerLayouts = (app: App) => {
    const layouts = import.meta.glob('../layouts/*.vue')

    for (const layout in layouts) {
      const name: string = layout.split('/').pop()?.replace('.vue', '') || ''
      app.component(
        name,
        defineAsyncComponent(() => import(`../layouts/${name}.vue`))
      )
    }
  }

  return { registerLayouts }
}
