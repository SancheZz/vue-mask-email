import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      fix: true,
    }),
    StylelintPlugin(),
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, 'MaskEmail/plugin.ts'),
      name: 'MyLib',
      fileName: (format) => `MaskEmail.${format}.js`,
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
