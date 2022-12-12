/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { DefineComponent } from 'vue';
import type { Plugin } from 'vue';

declare module 'vue' {
  export interface GlobalComponents {
    MaskEmail: DefineComponent<{
      autofocus?: boolean;
      disabled?: boolean;
      enterkeyhint?: 'enter'| 'done'| 'go'| 'next'| 'previous'| 'search'| 'send' | null | undefined;
      name?: string;
      placeholder?: string;
      readonly?: boolean;
      required?: boolean;
      value: string;
    }, {}, any>;
  }
}

declare const plugin: Plugin;

export default plugin;
