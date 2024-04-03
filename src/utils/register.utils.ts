import type { App } from 'vue'
import { defineAsyncComponent } from 'vue'

export default function useRegisterUtils() {
  const registerLayouts = (app: App<Element>) => {
    // @ts-ignore
    const layouts = import.meta.glob('../layout/*.vue')

    for (const layout in layouts) {
      const name = layout.split('/').pop()?.replace('.vue', '')
      app.component(
        // @ts-ignore
        name,
        defineAsyncComponent(() => import(`../layout/${name}.vue`))
      )
    }
  }

  return { registerLayouts }
}
