<script lang="ts" setup>
import { computed, toRefs, ref } from 'vue';
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

const computedValue = computed({
  get: () => sanitizeEmail(props.value),
  set: value => emit('update:value', value),
});

type MaskInput = {
  input: HTMLInputElement | null;
};

const rootElement = ref<HTMLDivElement | null>(null);
const maskInput = ref<MaskInput | undefined>();
const control = computed(() => maskInput?.value?.input || null);

defineExpose({
  element: rootElement,
  control,
});
</script>

<template>
  <div
    ref="rootElement"
    class="mask-email"
  >
    <MaskEmailInput
      ref="maskInput"
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
