<script setup lang="ts">
import { ref } from 'vue';
import MaskEmail from '../MaskEmail/MaskEmail.vue';

const value = ref('');
</script>

<template>
  <MaskEmail
    v-model:value="value"
    class="mask-email"
    placeholder="hello@world.com"
  />
</template>

<style lang="scss" scoped>
.mask-email {
  --mask-padding: 5px 10px;
  --mask-input-input: gray;
  --mask-placeholder-color: lightgray;

  border: 2px solid black;
  border-radius: 4px;
  transition: border-color 0.1s ease-out;

  &:focus-within {
    border-color: blue;
  }
}
</style>
