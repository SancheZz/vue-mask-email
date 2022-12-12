<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { sanitizeEmail } from './utils';
import MaskEmailInput from './MaskEmailInput.vue';
import MaskEmailPlaceholder from './MaskEmailPlaceholder.vue';

const props = withDefaults(
  defineProps <{
    autofocus?: boolean;
    disabled?: boolean;
    enterkeyhint?: 'enter'| 'done'| 'go'| 'next'| 'previous'| 'search'| 'send' | null | undefined;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    value: string;
  }>(),
  {
    placeholder: 'username@example.com',
    autofocus: false,
    enterkeyhint: null,
    readonly: false,
    required: false,
    disabled: false,
    name: '',
  },
);

const {
  placeholder,
  autofocus,
  enterkeyhint,
  readonly,
  required,
  disabled,
  name,
} = toRefs(props);

const emit = defineEmits <{
  (event: 'update:value', value: string): void;
}>();

const computedValue = computed <string>({
  get: () => sanitizeEmail(props.value),
  set: value => emit('update:value', value),
});
</script>

<template>
  <div class="mask-email">
    <MaskEmailInput
      v-model:value="computedValue"
      :autofocus="autofocus"
      :disabled="disabled"
      :enterkeyhint="enterkeyhint"
      :name="name"
      :readonly="readonly"
      :required="required"
    />

    <MaskEmailPlaceholder
      :placeholder="placeholder"
      :value="computedValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.mask-email {
  position: relative;
  display: inline-block;
  font: 13px / normal Arial, sans-serif;
  padding: 0px !important;
}
</style>
