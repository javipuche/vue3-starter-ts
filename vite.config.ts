import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
// @ts-expect-error  Salta alarma, se supone que lo tienen que arreglar en versiones futuras
import VueMacros from 'unplugin-vue-macros/vite' // TODO: Probar a quitar cuando salga vue 3.3
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue()
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/assets/scss/settings/index';
        `
      }
    }
  }
})
