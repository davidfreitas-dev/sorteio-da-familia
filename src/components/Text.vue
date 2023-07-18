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
});
</script>

<template>
  <span
    :class="{
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg',
    }"
    class="text-gray-700 font-sans"
  >
    {{ text }}
  </span>
</template>