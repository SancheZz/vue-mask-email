import MaskEmail from './MaskEmail.vue';
import type { Plugin } from 'vue';

declare module 'vue' {
  export interface GlobalComponents {
    MaskEmail: typeof MaskEmail;
  }
}

export type Props = {
  value: string;
  placeholder?: string;
};

declare const plugin: Plugin;

export default plugin;
