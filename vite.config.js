import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@styles': '/src/styles',
            '@components': '/src/components',
            '@images': '/src/assets/images',
            '@utils': '/src/utils',
        },
    },
})
