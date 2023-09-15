<script setup>
import { PhPlus } from '@phosphor-icons/vue';

const props = defineProps({
  text: {
    type: String,
    default: 'Text Button'
  },
  color: {
    type: String,
    default: 'success'
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <button
    :class="{ 'bg-success': color === 'success' }"
    class="flex justify-center items-center gap-2 text-white text-base font-medium uppercase border-none rounded transition-all duration-200 ease-in active:scale-95 active:opacity-80 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 py-3 px-6"
  >
    <ph-plus
      v-if="icon === 'plus'"
      :size="20"
    />

    {{ text }}
  </button>
</template>