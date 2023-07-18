<script setup>
import { computed } from 'vue';
import { PhGift, PhConfetti, PhArrowClockwise } from '@phosphor-icons/vue';

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
    class="flex justify-center items-center gap-2 hover:opacity-80 disabled:bg-gray-400 text-white text-base font-medium uppercase border-none rounded-md cursor-pointer disabled:cursor-not-allowed transition-colors py-3 px-6 min-w-[175px]"
  >
    <ph-gift
      v-if="icon === 'gift'"
      :size="24"
    />

    <ph-confetti
      v-if="icon === 'confeti'"
      :size="24"
    />

    <ph-arrow-clockwise
      v-if="icon === 'reset'"
      :size="24"
    />

    {{ text }}
  </button>
</template>