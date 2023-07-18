<script setup>
import { PhHeart } from '@phosphor-icons/vue';
</script>

<template>
  <div class="header h-32 flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold mb-1">
      Sorteio da Família 🙏
    </h1>

    <p class="flex justify-center items-center text-lg text-gray-700">
      Desenvolvido com 
      <PhHeart
        :size="20"
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
