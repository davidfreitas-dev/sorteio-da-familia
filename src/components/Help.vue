<script setup>
import { PhQuestion } from '@phosphor-icons/vue';

const handleHelp = () => {
  console.log('Abrir Ajuda');
};
</script>

<template>
  <div class="help self-end text-white p-4">
    <ph-question
      :size="40"
      @click="handleHelp"
    />
  </div>
</template>