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

``` vue
<template>
  <MaskEmail
    v-model:value="value"
    placeholder="username@example.com"
    class="mask-email"
  />
</template>

<style lang="scss" scoped>
.mask-email {
  /* padding for input and placeholder */
  --mask-padding: 5px 10px;

  /* input text's css property color */
  --mask-input-input: gray;

  /* placeholder text's css property color */
  --mask-placeholder-color: pink;

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
* __placeholder__ *String* - user visible placeholder
* __value__ *String* - passed value
