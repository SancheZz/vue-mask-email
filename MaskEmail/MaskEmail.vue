<script lang="ts" setup>
import { computed } from 'vue';
import { sanitizeEmail } from './utils';
import MaskEmailInput from './MaskEmailInput.vue';
import MaskEmailPlaceholder from './MaskEmailPlaceholder.vue';

type Props = {
  value: string;
  placeholder?: string;
};

const props = withDefaults(defineProps <Props>(), {
  placeholder: 'username@example.com',
});

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
}
</style>
