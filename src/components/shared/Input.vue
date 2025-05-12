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
  <div class="flex items-center gap-3 h-[52px] w-full p-4 bg-transparent border border-disabled focus-within:border-none rounded-xl focus-within:ring-2 ring-success">
    <input
      class="flex-1 bg-transparent text-base text-white placeholder:text-secondary outline-none"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateValue"
      @keyup.enter="$emit('onKeyupEnter')"
    >
  </div>
</template>