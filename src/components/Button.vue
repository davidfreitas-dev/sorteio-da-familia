<script setup>
import { PhPlus } from '@phosphor-icons/vue';

const props = defineProps({
  isDrawing: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <button
    :disabled="isDrawing"
    :class="{
      'bg-primary': color === 'primary',
      'bg-secondary': color === 'secondary',
      'bg-success': color === 'success',
    }"
    class="flex justify-center items-center gap-2 text-white text-base font-medium uppercase border-none rounded transition-all duration-200 ease-in active:scale-95 active:opacity-80 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 py-3 px-6"
  >
    <ph-plus
      v-if="icon === 'plus'"
      :size="20"
    />

    {{ text }}
  </button>
</template>