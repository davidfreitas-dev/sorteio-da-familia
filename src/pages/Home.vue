<script setup>
import { onMounted, onBeforeUnmount, computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { PhHeart } from '@phosphor-icons/vue';
import { useFamilyStore } from '@/stores/familyStore';

import Progressbar from '@/components/shared/Progressbar.vue';
import Dialog from '@/components/shared/Dialog.vue';
import Text from '@/components/shared/Text.vue';
import Help from '@/components/Help.vue';
import Result from '@/components/Result.vue';

const familyStore = useFamilyStore();

const { familiesNotDrawn } = storeToRefs(familyStore);

const isDrawing = ref(false);
const progress = ref(0);
const result = ref(undefined);
const isOver = computed(() => {
  return familiesNotDrawn.value.length === 0;
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

const startDrawing = async () => {
  if (isOver.value) return;

  progress.value = 0;  
  
  isDrawing.value = true;

  const shuffledFamilies = await shuffleArray([...familiesNotDrawn.value]);
  const startTime = new Date().getTime();

  const interval = setInterval(() => {
    const currentTime = new Date().getTime();
    const elapsed = currentTime - startTime;
    const duration = shuffledFamilies.length === 1 ? 100 : 10000;

    if (elapsed < duration) {
      const randomIndex = Math.floor(Math.random() * shuffledFamilies.length);
      result.value = shuffledFamilies[randomIndex];
      progress.value++;
      return;
    } 
    
    const remainingNames = shuffledFamilies.filter(name => name.drawn === false);
    const lastRandomIndex = Math.floor(Math.random() * remainingNames.length);
      
    result.value = remainingNames[lastRandomIndex];
    progress.value = 100;
    isDrawing.value = false;

    clearInterval(interval);
  }, 100);
};

const resultRef = ref(undefined);

const confirmResult = async () => {
  if (!result.value) return;
  await familyStore.updateFamily(result.value.id, { drawn: true });
  resultRef.value?.explode();
};

const dialogRef = ref(null);

const handleReset = () => {
  dialogRef.value?.openModal();
};

const resetDrawing = async () => {
  await familyStore.resetFamiliesDrawnStatus();
  progress.value = 100;
  result.value = undefined;
};

const addEventListeners = () => {
  window.addEventListener('keyup', handleKeyPress);
};

const removeEventListeners = () => {
  window.removeEventListener('keyup', handleKeyPress);
};

onMounted(() => {
  familyStore.fetchFamiliesNotDrawn();
  addEventListeners();
});

onBeforeUnmount(() => {
  removeEventListeners();
});

const router = useRouter();

const handleKeyPress = (event) => {
  if (event.ctrlKey && event.altKey){
    switch (event.keyCode) {
    case 13: // Confirmar Sorteio (Ctrl + Alt + Enter)
      confirmResult();
      break;

    case 32: // Iniciar Sorteio (Ctrl + Alt + Espaco)
      startDrawing();
      break;

    case 82: // Resetar Sorteio (Ctrl + Alt + R)
      handleReset();
      break;

    case 78: // Cadatro de Famílias (Ctrl + Alt + N)
      router.push('/families');
      break;
    
    default:
      break;
    }
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen w-full">
    <Progressbar
      :progress="progress"
      class="mb-3"
    />
    
    <Result
      ref="resultRef"
      :result="result"
    />

    <Help />

    <Text
      v-if="isOver"
      text="Todos os nomes foram sorteados!"
      size="xl"
      class="text-danger text-center mb-16 uppercase animate__animated animate__pulse animate__infinite" 
    />

    <div
      v-else
      class="flex text-lg md:text-xl lg:text-2xl text-gray-400 mb-16"
    >
      Desenvolvido com 
      <ph-heart
        :size="24"
        weight="fill"
        color="red"
        class="mx-2"
      /> 
      por 
      <a
        href="https://davidfreitas.dev.br"
        target="_blank"
        class="mx-1 hover:text-success hover:underline"
      >
        David Freitas
      </a>
    </div>

    <Dialog
      ref="dialogRef"
      header="Deseja realmente zerar o sorteio?"
      message="Ao clicar em confirmar todos os nomes estarão disponíveis para o sorteio novamente."
      @confirm-action="resetDrawing"
    />
  </div>
</template>