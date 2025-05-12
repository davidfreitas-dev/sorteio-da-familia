<script setup>
import { ref, watch, toRefs } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { PhCaretDown, PhCheck } from '@phosphor-icons/vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
const { modelValue } = toRefs(props);

const selectedOption = ref(modelValue.value);

watch(modelValue, (newValue) => {
  selectedOption.value = newValue;
});

watch(selectedOption, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<template>
  <Listbox v-model="selectedOption">
    <div class="relative w-full">
      <ListboxButton class="flex items-center gap-3 h-12 w-full p-4 bg-transparent border border-disabled focus:outline-none focus:ring-2 focus:ring-success rounded-xl text-left text-white placeholder:text-secondary">
        <span class="flex-1 truncate text-white">
          {{ selectedOption.name }}
        </span>
        <PhCaretDown :size="20" color="grey" />
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions class="absolute mt-1.5 max-h-60 w-full overflow-auto rounded-xl bg-background-accent text-base shadow-lg ring-1 ring-black/20 focus:outline-none border border-disabled sm:text-sm z-10">
          <ListboxOption
            v-for="option in options"
            :key="option.value"
            :value="option"
            v-slot="{ active, selected }"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-success-accent text-white' : 'text-white',
                'relative cursor-pointer select-none py-4 pl-10 pr-4',
              ]"
            >
              <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">
                {{ option.name }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-success"
              >
                <PhCheck :size="20" color="white" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
