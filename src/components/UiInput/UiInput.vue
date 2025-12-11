<template>
  <div :class="$style.inputWrapper">
    <input
      :class="$style.input"
      :data-disabled="props.isDisabled"
      :disabled="props.isDisabled"
      :placeholder="props.placeholder"
      :type="props.type"
      :value="props.modelValue"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: string;
  isDisabled?: boolean;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
}

interface IEmit {
  (event: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  placeholder: '',
  type: 'text',
  isDisabled: false,
});

const emit = defineEmits<IEmit>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}
</script>

<style module lang="scss">
.inputWrapper {
  width: 100%;
}

.input {
  width: 100%;
  padding: 11px 14px;
  color: var(--color-black);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &::placeholder {
    color: var(--color-gray-600);
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(0, 108, 187, 0.2);
  }

  &[data-disabled='true'] {
    color: var(--color-gray-600);
    background-color: var(--color-gray-50);
    border-color: var(--color-gray-200);
    cursor: not-allowed;
    box-shadow: none;
  }
}
</style>
