<script setup>
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  weight: {
    type: String,
    default: ''
  },
});
</script>

<template>
  <span
    :class="{
      'text-sm': size === 'sm',
      'text-md': size === 'md',
      'text-lg': size === 'lg',
      'text-xl': size === 'xl',
      'text-3xl': size === 'xxl',
      'font-bold': weight === 'bold',
      'font-semibold': weight === 'semibold',
    }"
    class="text-gray-700 text-center font-sans w-3/4 leading-tight"
  >
    {{ text }}
  </span>
</template>