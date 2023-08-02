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
      'text-md': size === 'md',
      'text-xl': size === 'lg',
      'text-3xl': size === 'xl',
      'font-bold': weight === 'bold',
      'font-semibold': weight === 'semibold',
    }"
    class="text-gray-100 font-sans w-3/4 leading-tight"
  >
    {{ text }}
  </span>
</template>