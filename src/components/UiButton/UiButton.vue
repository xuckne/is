<template>
  <button
    :class="$style.button"
    :data-layout="props.layout"
    :data-disabled="props.isDisabled"
    :disabled="props.isDisabled"
    :type="props.type"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
  isDisabled: false,
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  height: 44px;
  padding: 0 18px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  color: var(--color-white);
  background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border: 1px solid var(--color-primary-dark);
  border-radius: 12px;
  box-shadow: 0 8px 18px rgba(0, 92, 187, 0.25);
  cursor: pointer;
  transition:
    transform 0.1s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(0, 92, 187, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 14px rgba(0, 92, 187, 0.25);
  }

  &[data-layout='secondary'] {
    color: var(--color-primary);
    background: var(--color-primary-soft);
    border-color: var(--color-gray-200);
    box-shadow: none;

    &:hover {
      background: var(--color-gray-100);
      border-color: var(--color-gray-400);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    }

    &:active {
      background: var(--color-gray-100);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    }
  }

  &[data-disabled='true'] {
    cursor: not-allowed;
    color: var(--color-gray-600);
    background: var(--color-gray-100);
    border-color: var(--color-gray-200);
    box-shadow: none;
    transform: none;
  }
}
</style>
