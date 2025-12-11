<template>
  <div :class="$style.selectWrapper">
    <select
      :class="$style.select"
      :data-disabled="props.isDisabled"
      :disabled="props.isDisabled"
      :value="props.modelValue"
      @change="onChange"
    >
      <option v-for="option in props.options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: string;
  isDisabled?: boolean;
  options: string[];
}

interface IEmit {
  (event: 'update:modelValue', value: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  isDisabled: false,
  options: () => [],
});

const emit = defineEmits<IEmit>();

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
}
</script>

<style module lang="scss">
.selectWrapper {
  position: relative;
  width: 100%;
}

.select {
  width: 100%;
  padding: 11px 42px 11px 14px;
  color: var(--color-black);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: 12px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);
  appearance: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
  background-image:
    linear-gradient(45deg, transparent 50%, var(--color-gray-600) 50%),
    linear-gradient(135deg, var(--color-gray-600) 50%, transparent 50%),
    linear-gradient(to right, var(--color-gray-200), var(--color-gray-200));
  background-position:
    right 16px center,
    right 9px center,
    right 34px center;
  background-size:
    8px 8px,
    8px 8px,
    1px 60%;
  background-repeat: no-repeat;

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
