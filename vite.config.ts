import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(new URL('./src', import.meta.url).pathname),
            '@components': path.resolve(new URL('./src/components', import.meta.url).pathname),
            '@styles': path.resolve(new URL('./src/styles', import.meta.url).pathname),
        },
    },
});
