/*
 * @Descripttion:
 * @Author: niezihao
 * @Date: 2023-09-05 15:19:57
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-18 12:18:55
 */
import { fileURLToPath, URL } from "node:url";
import path from 'path'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.vue'),
      // umd 形式的命名空间
      name: 'dict',
      fileName: (format) => `json-edit.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
        // 重写路径 --> 作用与vue配置pathRewrite作用相同
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
