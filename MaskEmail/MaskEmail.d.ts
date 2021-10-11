import type { Plugin } from 'vue';

export type Props = {
  value: string;
  placeholder?: string;
};

declare const plugin: Plugin;

export default plugin;
