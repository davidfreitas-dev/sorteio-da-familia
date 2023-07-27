<script setup>
import { PhHeart } from '@phosphor-icons/vue';
</script>

<template>
  <div class="header h-32 flex flex-col justify-center items-center">
    <h1 class="text-6xl font-bold mt-10 mb-3">
      Sorteio da Família 🙏
    </h1>

    <p class="flex justify-center items-center text-2xl text-gray-700">
      Desenvolvido com 
      <PhHeart
        :size="28"
        color="red"
        weight="fill"
        class="mx-1"
      /> 
      por         
      <a
        href="https://davidfreitas.dev.br"
        target="_blank"
        class="hover:text-success hover:underline cursor-pointer mx-1"
      >David Freitas</a>
    </p>
  </div>
</template>
