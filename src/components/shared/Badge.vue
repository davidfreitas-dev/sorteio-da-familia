<!-- Badge.vue -->
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'success',
    validator: (value) => ['secondary', 'success', 'warning', 'danger'].includes(value),
  },
});

// Mapeamento de classes Tailwind para background e texto
const bgClasses = {
  secondary: 'bg-neutral text-font-accent',
  success: 'bg-success-accent text-success',
  warning: 'bg-warning-accent text-warning',
  danger: 'bg-danger-accent text-danger',
};
</script>

<template>
  <span
    :class="[
      'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium truncate whitespace-nowrap overflow-hidden',
      bgClasses[props.color]
    ]"
  >
    {{ props.label }}
  </span>
</template>
