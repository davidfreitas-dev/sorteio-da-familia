<script setup>
import { PhUser, PhLockSimple, PhEnvelopeSimple } from '@phosphor-icons/vue';

const props = defineProps({
  type: { 
    type: String, 
    default: '' 
  },
  text: { 
    type: String, 
    default: '' 
  },
  placeholder: { 
    type: String, 
    default: '' 
  },
  icon: { 
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
    <ph-user
      v-if="icon === 'UserIcon'"
      :size="24"
    />

    <ph-envelope-simple
      v-if="icon === 'EnvelopeIcon'"
      :size="24"
    />

    <ph-lock-simple
      v-if="icon === 'LockClosedIcon'"
      :size="24"
    />

    <input
      class="flex-1 bg-transparent text-gray-100 text-base placeholder:text-gray-400 outline-none mx-1"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
      @keyup.enter="$emit('onKeyupEnter')"
    >
  </div>
</template>