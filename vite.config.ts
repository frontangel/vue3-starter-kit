import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import Unocss from 'unocss/vite'
import svgLoader from 'vite-svg-loader'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import dotenv from 'dotenv'
dotenv.config()

const pathSrc = path.resolve(__dirname, 'src')
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        VantResolver(),
      ],
      dirs: ['src/components'],
      dts: 'src/components/components.d.ts',
    }),
    svgLoader({
      defaultImport: 'component',
      svgo: false
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vite.svg'],
      manifest: {
        name: "Vue Vite Typescript",
        short_name: "App",
        start_url: "." + process.env.VITE_BASE_PATH,
        display: "standalone",
        background_color: "#ffffff",
        description: "A description of your app.",
        icons: [
          {
            src: "vite.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /\/api\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 день
              },
            },
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 днів
              },
            },
          },
        ],
      }
    }),
    Unocss(),
  ],
  base: process.env.VITE_BASE_PATH
})

