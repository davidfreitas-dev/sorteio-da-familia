<script setup>
const props = defineProps({
  type: { 
    type: String, 
    default: '' 
  },
  placeholder: { 
    type: String, 
    default: '' 
  },
  modelValue: { 
    type: [ String, Number ], 
    default: '' 
  }
});

const emit = defineEmits(['update:modelValue', 'onKeyupEnter']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="flex items-center gap-2 rounded w-full h-12 text-gray-400 focus-within:ring-2 ring-success bg-gray-800 py-4 px-3">
    <input
      class="flex-1 bg-transparent text-gray-100 text-base placeholder:text-gray-400 outline-none mx-1"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateValue"
      @keyup.enter="$emit('onKeyupEnter')"
    >
  </div>
</template>