import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import autoImport from 'unplugin-auto-import/vite'
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        autoImport({
            imports: ['vue', 'pinia', 'vue-router']
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        port: 8090,
        proxy: {
            '/dev-api': {
                target: 'http://60.204.236.211:8080/api',
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/dev-api/, '')
            }
        }
    }
})
