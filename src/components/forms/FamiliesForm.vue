<script setup>
import { onMounted, ref, reactive } from 'vue';
import { collection, onSnapshot, doc, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/services/firebase-firestore';
import InputText from '@/components/shared/InputText.vue';
import Button from '@/components/shared/Button.vue';

const emit = defineEmits(['onCloseModal']);

const props = defineProps({
  family: {
    type: Object,
    default: () => ({
      id: '',
      name: '',
      drawn: false,
    })
  }
});

const resetForm = () => {
  family.value.id = '';
  family.value.name = '';
  family.value.drawn = false;
};

const family = ref({ ...props.family });

const familyName = ref('');

const add = async () => {
  try {
    await addDoc(collection(db, 'families'), family.value);
    resetForm();
    emit('onCloseModal');
  } catch (error) {
    console.error('Erro ao adicionar família:', error);
  }
};

const edit = async () => {
  try {
    const familyDocRef = doc(db, 'families', family.value.id);
    await updateDoc(familyDocRef, family.value);
    resetForm();
    emit('onCloseModal');
    console.log('Família atualizada com sucesso');
  } catch (error) {
    console.error('Erro ao atualizar família:', error);
  }
};

const handleSave = async (event) => {
  event.preventDefault();
  
  if (!family.value.id) {
    add();
    return;
  }

  edit();
};
</script>

<template>
  <form>
    <InputText
      type="text"
      v-model="family.name"
      placeholder="Fulano (e Fulana)"
      @on-keyup-enter="handleSave"
    />

    <Button
      class="mt-5"
      :disabled="!family.name"
      @click="handleSave"
    >
      Salvar Dados
    </Button>
  </form>
</template>