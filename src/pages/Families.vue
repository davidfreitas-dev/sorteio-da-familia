<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { PhArrowLeft } from '@phosphor-icons/vue';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { db } from '@/services/firebase-firestore';
import Text from '@/components/Text.vue';
import TextInput from '@/components/TextInput.vue';
import Button from '@/components/Button.vue';
import Loader from '@/components/Loader.vue';
import List from '@/components/List.vue';

const router = useRouter();
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

  addDoc(collection(db, 'families'), {
    name: family.value,
    drawn: false
  });

  family.value = '';
};

const isLoading = ref(true);

const loadData = async () => {
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

    isLoading.value = false;
  });
};

onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="w-4/5 mx-auto my-5 p-4">
    <div class="flex justify-start items-center gap-4">
      <ph-arrow-left
        :size="32"
        class="text-success cursor-pointer"
        @click="router.push('/')"
      />
      
      <Text 
        text="Cadastro de Famílias"
        weight="bold"
        size="xl"
      />
    </div>

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
        :disabled="!family"
        @click="handleAdd"
      />
    </div>

    <Loader v-if="isLoading" />

    <List
      v-else
      :list="familiesNames"
    />
  </div>
</template>