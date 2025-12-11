<template>
  <div :class="$style.field">
    <label v-if="props.label" :class="$style.label">{{ props.label }}</label>
    <div :class="$style.control">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  label: '',
});
</script>

<style module lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--color-gray-600);
  font-size: 0.95rem;
  font-weight: 700;
}

.control {
  width: 100%;
}
</style>
