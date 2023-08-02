<script setup>
import { onMounted, ref } from 'vue';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '@/services/firebase-firestore';
import Text from '@/components/Text.vue';
import TextInput from '@/components/TextInput.vue';
import Button from '@/components/Button.vue';
import List from '@/components/List.vue';

const family = ref('');
const familiesNames = ref([]);

const checkExists = async (familyName) => {
  return familiesNames.value.filter(family => family.name === familyName).length;
};

const handleAdd = async () => {
  const exists = await checkExists(family.value);

  if (exists) {
    console.log('Esta família já foi cadastrada');
    return;
  }

  const docRef = await addDoc(collection(db, 'families'), {
    name: family.value,
    drawn: false
  });

  console.log('Document written with ID: ', docRef.id);
};

const loadData = () => {
  onSnapshot(collection(db, 'families'), (querySnapshot) => {
    const families = [];

    querySnapshot.forEach(doc => {
      const family = {
        id: doc.id,
        name: doc.data().name,
        drawn: doc.data().drawn
      };

      families.push(family);
    });

    familiesNames.value = families;
  });
};

onMounted(() => {
  loadData();
});
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
        v-model="family"
        @on-keyup-enter="handleAdd"
        placeholder="Nome da família"
        type="text"
      />

      <Button
        text="Adicionar"
        color="success"
        icon="plus"
        @click="handleAdd"
      />
    </div>

    <List :list="familiesNames" />
  </div>
</template>