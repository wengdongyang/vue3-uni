/** @format */
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite';
// https://vitejs.dev/config/
const baseURL = 'http://wj.ikeqiao.net';
export default defineConfig({
  plugins: [
    uni(),
    vueJsx(),
    vueSetupExtend({ enableAutoExpose: true }), // setup上主动命名
  ],
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    host: true,
    open: true,
    proxy: {
      '/town/api': { target: baseURL, ws: false, changeOrigin: true },
    },
  },
});
