<script setup>
import { PhMagnifyingGlass } from '@phosphor-icons/vue';

const props = defineProps({
  modelValue: { 
    type: String, 
    default: '' 
  },
  placeholder: { 
    type: String, 
    default: 'O que você busca?' 
  }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="flex items-center gap-3 h-[52px] w-full p-4 bg-transparent border border-disabled focus-within:border-none rounded-xl focus-within:ring-2 ring-success">
    <input
      type="text"
      class="flex-1 bg-transparent text-base text-font placeholder:text-secondary outline-none"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateValue"
    >

    <ph-magnifying-glass
      :size="20"
      color="grey"
    />
  </div>
</template>