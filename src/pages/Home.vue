<script setup>
import { computed, ref } from 'vue';
import Progressbar from '@/components/Progressbar.vue';
import Header from '@/components/Header.vue';
import Result from '@/components/Result.vue';
import Button from '@/components/Button.vue';
import Text from '@/components/Text.vue';

const names = ref([
  { name: 'João', drawn: false },
  { name: 'Maria', drawn: false },
  { name: 'Pedro', drawn: false },
]);

const isOver = computed(() => {
  return names.value.some(name => name.drawn === false) ? false : true;
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
  names.value.forEach((e) => {
    if (e.name === result.value.name) {
      e.drawn = true;
    }
  });

  resultRef.value?.explode();
};

const isDrawing = ref(false);
const progress = ref(0);

const startDrawing = async () => {
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
    name.drawn = false;
  });
  
  result.value = undefined;
  progress.value = 0;
};
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen w-full">
    <Progressbar
      :progress="progress"
      class="mb-3"
    />

    <Header />
    
    <Result
      ref="resultRef"
      :result="result"
    />

    <Text
      v-if="isOver"
      text="Todos os nomes foram sorteados!"
      size="lg"
      class="text-danger uppercase animate__animated animate__pulse animate__infinite" 
    />

    <div class="actions h-32 flex justify-center items-center gap-5">
      <Button
        v-if="!isOver"
        text="Sortear"
        color="secondary"
        icon="gift"
        :disabled="isDrawing"
        @click="startDrawing"
      />

      <Button
        v-if="result && !isOver"
        text="Confirmar"
        color="success"
        icon="confeti"
        :disabled="isDrawing"
        @click="confirmResult"
      />

      <Button
        v-if="isOver"
        text="Redefinir"
        color="primary"
        icon="reset"
        :disabled="isDrawing"
        @click="resetDrawing"
      />
    </div>
  </div>
</template>