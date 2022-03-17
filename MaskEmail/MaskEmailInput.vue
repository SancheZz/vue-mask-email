<script lang="ts" setup>
import { ref, computed } from 'vue';
import { sanitizeEmail } from './utils';

type Props = {
  value: string;
};

const props = defineProps <Props>();

const emit = defineEmits <{
  (event: 'update:value', value: string): void;
}>();

const inputValue = computed({
  get: () => props.value,
  set: value => emit('update:value', sanitizeEmail(value)),
});

const input = ref<HTMLInputElement | null>(null);

function handleInput (event: Event) {
  const target = event.target as HTMLInputElement;

  const isSanitized = target.value.length > inputValue.value.length;
  const position = isSanitized && target.selectionEnd
    ? target.selectionEnd - 1
    : target.selectionEnd;

  target.value = inputValue.value;
  target.setSelectionRange(position, position);
}
</script>

<template>
  <input
    ref="input"
    v-model="inputValue"
    class="email-input"
    type="text"
    @input="handleInput"
  >
</template>

<style lang="scss" scoped>
@import './defaults';

.email-input {
  background: transparent;
  box-sizing: border-box;
  width: 100%;
  padding: 0;
  color: var(--mask-input-color, $input-color);
  font: inherit;
  text-align: left;
  border: none;
  outline: none;
}
</style>
