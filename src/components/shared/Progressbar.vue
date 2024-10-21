<script setup>
const props = defineProps({
  progress: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 100
  }
});
</script>

<template>
  <div class="relative w-full bg-gray-200 rounded">
    <div
      :style="{ width: progress + '%' }"
      class="absolute top-0 left-0 h-3 transition-width duration-500 bg-success rounded-r"
    />
  </div>
</template>
