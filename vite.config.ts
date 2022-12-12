import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      fix: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'MaskEmail/MaskEmail.d.ts',
          dest: './',
        },
      ],
    }),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'MaskEmail/plugin.ts'),
      name: 'MaskEmail',
      fileName: format => `MaskEmail.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
