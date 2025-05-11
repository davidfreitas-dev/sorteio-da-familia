<script setup>
import { ref, watch } from 'vue';
import { useFamilyStore } from '@/stores/familyStore';
import Input from '@/components/shared/Input.vue';
import Button from '@/components/shared/Button.vue';
import Switch from '@/components/shared/Switch.vue';

const emit = defineEmits(['onCloseModal']);

const props = defineProps({
  family: {
    type: Object,
    default: () => ({
      id: '',
      name: '',
      drawn: false,
    })
  }
});

const family = ref({ ...props.family });

watch(() => props.family, (newFamily) => {
  family.value = { ...newFamily };
}, { deep: true });

const { addFamily, updateFamily } = useFamilyStore();

const resetForm = () => {
  family.value.id = '';
  family.value.name = '';
  family.value.drawn = false;
};

const handleSave = async (event) => {
  event.preventDefault();

  if (family.value.id) {
    await updateFamily(family.value.id, family.value);
  } else {
    await addFamily(family.value);
  }
  
  resetForm();

  emit('onCloseModal');
};
</script>

<template>
  <form>
    <Input
      type="text"
      v-model="family.name"
      placeholder="Fulano (e Fulana)"
      @on-keyup-enter="handleSave"
    />

    <div class="flex gap-2 text-white my-5">
      <span>Sorteado</span>
      <Switch v-model="family.drawn" />
    </div>

    <Button
      class="mt-5"
      :disabled="!family.name"
      @click="handleSave"
    >
      Salvar
    </Button>
  </form>
</template>
