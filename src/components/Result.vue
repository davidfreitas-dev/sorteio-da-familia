<script setup>
import { nextTick, ref } from 'vue';
import ConfettiExplosion from 'vue-confetti-explosion';
import Text from '@/components/Text.vue';

const props = defineProps({
  result: {
    type: Object,
    default: () => ({
      name: '',
      drawn: false
    })
  }
});

const visible = ref(false);

const explode = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
};

defineExpose({explode});
</script>

<template>
  <div class="content flex-1 flex flex-col justify-center items-center">
    <ConfettiExplosion v-if="visible" />
  
    <div id="result">
      {{ $filters.resultFilter(result) }}
    </div>

    <Text
      v-if="result.drawn"
      :text="`Não esquece a limpeza da igreja amanhã, hein ${result.name}?! 😉`"
      class="my-3 animate__animated animate__zoomIn"
      weight="semibold"
      size="xl"
    />
  </div>
</template>

<style scoped>
#result {
  font-family: 'Lilita One', cursive;
  font-size: 3.75rem/* 60px */;
  line-height: 1;
}
</style>
