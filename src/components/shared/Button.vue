<script setup>
import Loader from './Loader.vue';

const props = defineProps({
  isLoading: Boolean,
  size: { 
    type: String, 
    default: '' 
  },
  color: { 
    type: String, 
    default: 'success' 
  },
});
</script>

<template>
  <button
    type="submit"
    :class="{ 
      'success': color === 'success', 
      'secondary': color === 'secondary', 
      'outline': color === 'outline', 
      'danger': color === 'danger',
      'w-full text-center': size === 'full', 
      'small-button': size === 'small'
    }"
  >
    <Loader v-if="isLoading" />
    <slot v-else />
  </button>
</template>

<style scoped>
.success {
  @apply flex items-center justify-center gap-1.5 py-3.5 px-4 bg-success font-semibold text-font text-base rounded-xl cursor-pointer transition-colors hover:bg-success-hover focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-success active:bg-success-pressed disabled:bg-disabled disabled:cursor-not-allowed;
}
.secondary {
  @apply flex items-center justify-center gap-1.5 py-3.5 px-4 bg-white font-semibold text-gray-700 text-base rounded-xl cursor-pointer border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:bg-disabled disabled:text-font disabled:cursor-not-allowed;
}
.outline {
  @apply flex items-center justify-center gap-1.5 py-3.5 px-4 bg-transparent font-semibold text-base text-success rounded-xl cursor-pointer border-2 border-success hover:bg-success outline-none hover:text-font transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-success focus:text-font active:bg-success-pressed;
}
.danger {
  @apply flex items-center justify-center gap-1.5 py-3.5 px-4 bg-danger font-semibold text-font text-base rounded-xl cursor-pointer transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-danger active:bg-red-700 disabled:bg-disabled disabled:cursor-not-allowed;
}
.small-button {
  @apply p-2;
}
</style>
