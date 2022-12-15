# @yasanchezz/vue-mask-email

> This is an input mask which is based on VueJs 3.2+ and requires modern browsers.

## Installation

Install npm package
`npm install @yasanchezz/vue-mask-email --save-dev`

Declare dependency in main.js

``` js
import MaskEmail from '@yasanchezz/vue-mask-email';
import '@yasanchezz/vue-mask-email/dist/style.css';

createApp(App)
  .use(MaskEmail)
  .mount('#app');
```

## Usage

``` ts
import type { MaskEmailRef } from '@yasanchezz/vue-mask-email'

const value = ref('');
const maskComponent = ref<MaskEmailRef>();
const control = computed(() => maskComponent.value?.control);

watch(control, (newControl, oldControl) => {
  newControl?.addEventListener('invalid', handleInvalid);
  oldControl?.removeEventListener('invalid', handleInvalid);
});
```

``` vue
<template>
  <MaskEmail
    ref="maskComponent"
    v-model:value="value"
    placeholder="username@example.com"
    class="mask-email"
    required
  />
</template>

<style lang="scss" scoped>
.mask-email {
  /* input text's css property color */
  --mask-input-color: gray;

  /* placeholder text's css property color */
  --mask-placeholder-color: pink;

  /* padding */
  --mask-padding: 4px 8px;

  border: 2px solid black;
  border-radius: 4px;
  transition: border-color .1s ease-out;

  /* yeap, input has no styles itself, you have to style it */
  &:focus-within {
    border-color: blue;
  }
}
</style>
```

### props
* __autofocus__ *optional Boolean* -- passed attribute;
* __disabled__ *optional Boolean* -- passed attribute;
* __enterkeyhint__ *optional String* -- passed attribute;
* __name__ *optional String* -- passed attribute;
* __placeholder__ *optional String* - user visible placeholder;
* __readonly__ *optional Boolean* -- passed attribute;
* __required__ *optional Boolean* -- passed attribute;
* __value__ *String* - passed value;
