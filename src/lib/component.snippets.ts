export const viteConfigComponentSnippet = `import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...your code here
  plugins: [
    Components({
      resolvers: [
        VantResolver(),
      ],
      dirs: ['src/components'],
      dts: 'src/components/components.d.ts',
    }),
    // ...your code here
  ],
  // ...your code here
})`
