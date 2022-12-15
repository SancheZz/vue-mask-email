<script lang="ts" setup>
import { computed } from 'vue';
import { parseEmail } from './utils';

const props = defineProps <{
  placeholder: string;
  value: string;
}>();

const computedPlaceholder = computed(() => {
  const placeholderParts = parseEmail(props.placeholder);
  const inputParts = parseEmail(props.value) || {};

  if (placeholderParts) {
    const name = inputParts.name || placeholderParts.name || 'username';
    const server = inputParts.server || placeholderParts.server || 'example';
    const domain = inputParts.domain || placeholderParts.domain || 'com';
    return `${name}@${server}.${domain}`;
  }

  return 'username@example.com';
});

function doesSymbolEqual(symbol: string, index: number) {
  return props.value[index] === symbol;
}

function calculateSymbolClasses(symbol: string, index: number) {
  const cssClassName = 'placeholder-symbol';
  return [cssClassName, {
    [`${cssClassName}--equaled`]: doesSymbolEqual(symbol, index),
  }];
}
</script>

<template>
  <div class="email-placeholder">
    <span
      v-for="(symbol, index) in Array.from(computedPlaceholder)"
      :key="index"
      v-memo="[symbol, value[index]]"
      :class="calculateSymbolClasses(symbol, index)"
    >{{ symbol }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import './defaults';

.email-placeholder {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  overflow: hidden;
  text-align: left;
  pointer-events: none;
  padding: var(--mask-padding, 0px);
}

.placeholder-symbol {
  color: var(--mask-placeholder-color, $placeholder-color);

  &--equaled {
    visibility: hidden;
  }
}
</style>
