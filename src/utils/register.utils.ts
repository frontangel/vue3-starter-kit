import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'

export default function useRegisterUtils() {
  const registerLayouts = (app: App<Element>) => {
    // @ts-ignore
    const layouts = import.meta.glob('../layouts/*.vue')

    for (const layout in layouts) {
      const name = layout.split('/').pop()?.replace('.vue', '')
      app.component(
        // @ts-ignore
        name,
        defineAsyncComponent(() => import(`../layouts/${name}.vue`))
      )
    }
  }

  return { registerLayouts }
}
