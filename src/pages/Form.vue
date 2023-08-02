<script setup>
import { ref } from 'vue';
import Text from '@/components/Text.vue';
import TextInput from '@/components/TextInput.vue';
import Button from '@/components/Button.vue';

const familyName = ref('');
</script>

<template>
  <div class="w-4/5 mx-auto my-5 p-4">
    <Text 
      text="Sorteio da Família"
      weight="bold"
      size="xl"
    />

    <div class="flex justify-start-items-center gap-3 my-4">
      <TextInput
        v-model="familyName"
        placeholder="Nome da família"
        type="text"
      />

      <Button
        text="Adicionar"
        color="success"
        icon="plus"
      />
    </div>
  </div>
</template>