<script setup>
import { onMounted, ref, reactive } from 'vue';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '@/services/firebase-firestore';
import InputText from '@/components/shared/InputText.vue';
import Button from '@/components/shared/Button.vue';

const emit = defineEmits(['onCloseModal']);

const familyName = ref('');

const handleAdd = async () => {
  addDoc(collection(db, 'families'), {
    name: familyName.value,
    drawn: false
  });

  familyName.value = '';

  emit('onCloseModal');
};
</script>

<template>
  <form>
    <InputText
      type="text"
      v-model="familyName"
      placeholder="Nome da família"
      @on-keyup-enter="handleAdd"
    />

    <Button
      class="mt-5"
      :disabled="!familyName"
      @click="handleAdd"
    >
      Salvar Dados
    </Button>
  </form>
</template>