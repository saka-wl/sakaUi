import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // dts({ insertTypesEntry: true, copyDtsFiles: false })
  ],
  build: {
    rollupOptions: {
      external: ['vue']
    },
    lib: {
      entry: 'src/components/index.ts',
      formats: ['cjs', 'es']
    }
  }
})
