<script setup>
import { PhUser, PhLockSimple, PhEnvelopeSimple } from '@phosphor-icons/vue';

const props = defineProps({
  type: { 
    type: String, 
    default: '' 
  },
  icon: { 
    type: String, 
    default: '' 
  },
  text: { 
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
  <div class="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-brand-hover">
    <ph-user
      v-if="icon === 'UserIcon'"
      :size="32"
    />

    <ph-envelope-simple
      v-if="icon === 'EnvelopeIcon'"
      :size="32"
    />

    <ph-lock-simple
      v-if="icon === 'LockClosedIcon'"
      :size="32"
    />

    <input
      className="bg-transparent flex-1 text-gray-100 text-base placeholder:text-gray-400 outline-none"
      :type="type"
      :placeholder="text"
      :value="modelValue"
      @input="updateValue"
      @keyup.enter="$emit('onKeyupEnter')"
    >
  </div>
</template>