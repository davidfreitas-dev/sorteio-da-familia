<script setup>
import { onMounted, onBeforeUnmount, computed, ref } from 'vue';
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/services/firebase-firestore';
import Progressbar from '@/components/Progressbar.vue';
import Result from '@/components/Result.vue';
import Text from '@/components/Text.vue';

const names = ref([]);

const isOver = computed(() => {
  return names.value.every(name => name.drawn);
});

const shuffleArray = async (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const result = ref(undefined);

const resultRef = ref(undefined);

const confirmResult = () => {
  if (!result.value) return;

  const docRef = doc(db, 'families', result.value.id);

  updateDoc(docRef, {
    drawn: true
  });

  resultRef.value?.explode();
};

const progress = ref(100);

const isDrawing = ref(false);

const startDrawing = async () => {
  if (isOver.value) return;

  progress.value = 1;
  isDrawing.value = true;  

  const filteredNames = names.value.filter(name => name.drawn === false);  
  const shuffledNames = await shuffleArray(filteredNames);
  const startTime = new Date().getTime();

  const interval = setInterval(() => {
    const currentTime = new Date().getTime();
    const elapsed = currentTime - startTime;
    const duration = shuffledNames.length === 1 ? 100 : 10000;

    if (elapsed < duration) {
      const randomIndex = Math.floor(Math.random() * shuffledNames.length);
      result.value = shuffledNames[randomIndex];
      progress.value++;
      return;
    } 
    
    const remainingNames = shuffledNames.filter(name => name.drawn === false);
    const lastRandomIndex = Math.floor(Math.random() * remainingNames.length);
      
    result.value = remainingNames[lastRandomIndex];
    progress.value = 100;
    isDrawing.value = false;

    clearInterval(interval);
  }, 100);
};

const resetDrawing = () => {
  names.value.forEach(name => {
    const docRef = doc(db, 'families', name.id);

    updateDoc(docRef, {
      drawn: false
    });
    
    name.drawn = false;
  });
  
  progress.value = 100;
  result.value = undefined;
};

const handleKeyPress = (event) => {
  if (event.ctrlKey){
    switch (event.keyCode) {
    case 13: // Confirmar Sorteio (CTRL + Enter)
      confirmResult();
      break;

    case 32: // Iniciar Sorteio (CTRL + Espaco)
      startDrawing();
      break;

    case 82: // Resetar Sorteio (CTRL + R)
      resetDrawing();
      break;
    
    default:
      break;
    }
  }
};

const addEventListeners = () => {
  window.addEventListener('keyup', handleKeyPress);
};

const removeEventListeners = () => {
  window.removeEventListener('keyup', handleKeyPress);
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

    names.value = families;
  });
};

onMounted(() => {
  loadData();
  addEventListeners();
});

onBeforeUnmount(() => {
  removeEventListeners();
});
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen w-full bg-gray-900">
    <Progressbar
      :progress="progress"
      class="mb-3"
    />
    
    <Result
      ref="resultRef"
      :result="result"
    />

    <Text
      v-if="isOver"
      text="Todos os nomes foram sorteados!"
      size="xxl"
      class="text-danger mb-10 uppercase animate__animated animate__pulse animate__infinite" 
    />
  </div>
</template>