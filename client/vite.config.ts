import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

const dynamicComponentResolver = (name: string) => {
  // مسیر فولدر کامپوننت‌ها
  const componentsFolder = 'src/components'

  // بررسی اگر نام کامپوننت با پوشه‌ها تطابق داشته باشد
  if (name.startsWith('App')) {
    const componentPath = path.join(componentsFolder, name)
    // تبدیل مسیر به نام کامپوننت
    const componentName = path.basename(componentPath)
    return { name: componentName, from: componentPath }
  }
  return undefined
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),

    Components({
      dirs: ['src/components'], // مسیر فولدر کامپوننت‌ها
      extensions: ['vue'], // پسوند فایل‌ها
      deep: true, // اسکن دایرکتوری‌های تو در تو
      dts: true,
      resolvers: [dynamicComponentResolver],
    }),
    AutoImport({
      imports: ['vue', 'vue-router'], // برای auto-import فانکشن‌های Vue
      dirs: ['src/composables'], // مسیر فایل‌های کامپوزبل
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      src: fileURLToPath(new URL('./src', import.meta.url)), // افزودن alias برای src
    },
  },
  server: {
    port: 8180,
  },
})
