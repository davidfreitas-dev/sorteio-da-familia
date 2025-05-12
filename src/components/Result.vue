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
  <div class="content flex-1 flex flex-col justify-center items-center w-full h-1/4 overflow-hidden text-font">
    <ConfettiExplosion
      v-if="visible"
      :stage-width="1200"
    />
  
    <div class="result text-4xl md:text-6xl lg:text-8xl">
      {{ $filters.resultFilter(result) }}
    </div>
  </div>
</template>

<style scoped>
.result {
  font-family: 'Lilita One', cursive;
  line-height: 1;
}
</style>
