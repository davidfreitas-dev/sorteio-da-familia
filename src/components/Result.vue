<script setup>
import { nextTick, ref } from 'vue';
import ConfettiExplosion from 'vue-confetti-explosion';

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
  <div class="content flex-1 flex flex-col justify-center items-center text-white">
    <div class="h-1/4 flex flex-col justify-start items-center">
      <ConfettiExplosion v-if="visible" />
  
      <div id="result">
        {{ $filters.resultFilter(result) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
#result {
  font-family: 'Lilita One', cursive;
  font-size: 8rem/* 60px */;
  line-height: 1;
}
</style>
