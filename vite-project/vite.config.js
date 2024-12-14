import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
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
                changeOrigin:true,
                rewrite:(p) =>p.replace(/^\/dev-api/, '')
            }
        }
    }
})
