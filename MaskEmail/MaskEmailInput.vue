<script lang="ts" setup>
import { ref, computed } from 'vue';
import { sanitizeEmail } from './utils';

const props = defineProps <{
  autofocus: boolean;
  disabled: boolean;
  enterkeyhint: 'enter'| 'done'| 'go'| 'next'| 'previous'| 'search'| 'send' | null | undefined;
  name: string;
  readonly: boolean;
  required: boolean;
  value: string;
}>();

const emit = defineEmits <{
  (event: 'update:value', value: string): void;
}>();

const inputValue = computed({
  get: () => props.value,
  set: value => emit('update:value', sanitizeEmail(value)),
});

function handleInput(event: Event) {
  const { target } = event;

  if (target instanceof HTMLInputElement) {
    const isSanitized = target.value.length > inputValue.value.length;
    const position = isSanitized && target.selectionEnd
      ? target.selectionEnd - 1
      : target.selectionEnd;

    target.value = inputValue.value;
    target.setSelectionRange(position, position);
  }
}

const inputElement = ref<HTMLInputElement | null>(null);

defineExpose({
  input: inputElement,
});
</script>

<template>
  <input
    ref="inputElement"
    v-model="inputValue"
    :autofocus="autofocus"
    class="email-input"
    :disabled="disabled"
    :enterkeyhint="enterkeyhint"
    :name="name"
    :readonly="readonly"
    :required="required"
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
  padding: var(--mask-padding, 0px);
  font: inherit;
  text-align: left;
  border: none;
  outline: none;
}
</style>
