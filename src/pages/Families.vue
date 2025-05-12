<script setup>
import { onMounted, ref, reactive, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { debounce } from 'vue-debounce';
import { useLoading } from '@/composables/useLoading';
import { useFamilyStore } from '@/stores/familyStore';
import { PhPlus, PhTrash, PhNotePencil, PhArrowLeft } from '@phosphor-icons/vue';

import Wrapper from '@/components/shared/Wrapper.vue';
import Text from '@/components/shared/Text.vue';
import Search from '@/components/shared/Search.vue';
import Button from '@/components/shared/Button.vue';
import Badge from '@/components/shared/Badge.vue';
import Loader from '@/components/shared/Loader.vue';
import Dialog from '@/components/shared/Dialog.vue';
import Modal from '@/components/shared/Modal.vue';
import FamiliesForm from '@/components/forms/FamiliesForm.vue';

const router = useRouter();
const familyStore = useFamilyStore();
const search = ref('');
const selectedFamily = ref(null);
const tableHead = reactive(['#', 'Nome', 'Status', 'Atualizado em', 'Ações']);

const { isLoading, withLoading } = useLoading();

const loadData = async () => {
  await withLoading(async () => {
    await familyStore.fetchFamilies();
  });
};

onMounted(() => {
  loadData();
});

const families = computed(() => {
  if (!search.value.trim()) return familyStore.families;

  const lowerSearch = search.value.toLowerCase();

  return familyStore.families.filter(family =>
    family.name.toLowerCase().includes(lowerSearch)
  );
});

const handleDebounce = debounce((searchValue) => {
  search.value = searchValue;
}, '500ms');

watch(search, (newValue) => {
  handleDebounce(newValue);
});

const modalRef = ref(null);

const handleAddFamily = () => {
  selectedFamily.value = null;
  modalRef.value?.setOpen();
};

const handleEditFamily = (family) => {
  selectedFamily.value = family;
  modalRef.value?.setOpen();
};

const dialogRef = ref(null);

const handleDeleteFamily = (family) => {
  selectedFamily.value = family;
  dialogRef.value?.openModal();
};

const deleteFamily = async () => {
  try {
    await familyStore.deleteFamily(selectedFamily.value.id);
    console.log('Família excluída com sucesso');
  } catch (error) {
    console.error('Erro ao excluir família:', error);
  }
};

const closeModal = () => {
  modalRef.value?.closeModal();
};
</script>

<template>
  <div class="w-[90%] xl:w-5/6 mx-auto my-5 p-4">
    <div class="flex justify-between items-center gap-4">
      <Text 
        text="Famílias"
        weight="bold"
        size="xl"
      />
      
      <Button @click="handleAddFamily">
        <ph-plus :size="20" />
        
        <span class="hidden md:block">
          Adicionar
        </span>
      </Button>
    </div>

    <div class="bg-background-accent rounded-3xl border border-neutral my-8">
      <div class="flex justify-between items-center w-full p-5">
        <Search
          v-model="search"
          placeholder="Buscar família"
        />
      </div>

      <div
        v-if="isLoading || (!isLoading && !families.length)"
        class="flex justify-center items-center w-full text-white p-10"
      >
        <Loader
          v-if="isLoading"
          color="primary"
        />
        <span v-if="!isLoading && !families.length">
          Nenhuma família encontrada.
        </span>
      </div>

      <div
        v-if="!isLoading && families.length"
        class="data-table relative overflow-x-auto my-3"
      >
        <table class="w-full text-left text-gray-500">
          <thead class="border-y border-neutral text-font-accent">
            <tr>
              <th
                v-for="(item, i) in tableHead"
                :key="i"
                scope="col"
                class="px-8 py-4"
              >
                {{ item }}
              </th>
            </tr>
          </thead> 
          <tbody>
            <tr
              v-for="(item, i) in families"
              :key="i"
              :class="[ 'hover:bg-neutral hover:text-white', i !== families.length - 1 ? 'border-b border-neutral' : '' ]"
            >
              <th
                scope="row"
                class="px-8 py-4 font-medium text-font-accent whitespace-nowrap"
              >
                #{{ i + 1 }}
              </th> 
              <td class="px-8 py-4 text-white">
                {{ item.name }}
              </td> 
              <td class="px-8 py-4">
                <Badge
                  :label="item.drawn ? 'Sorteado' : 'Pendente'"
                  :color="item.drawn ? 'success' : 'secondary'"
                /> 
              </td> 
              <td class="px-8 py-4 text-white">
                10/05/2025
              </td> 
              <td class="px-8 py-4">
                <div class="flex gap-3">
                  <Button
                    size="small"
                    color="secondary"
                    @click="handleEditFamily(item)"
                  >
                    <ph-note-pencil :size="20" />
                  </Button> 
                  <Button
                    size="small"
                    color="danger"
                    @click="handleDeleteFamily(item)"
                  >
                    <ph-trash :size="20" />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Dialog
      ref="dialogRef"
      header="Deseja realmente excluir esta família?"
      message="Ao clicar em confirmar as informações serão excluidas permanentemente."
      @confirm-action="deleteFamily"
    />

    <Modal
      ref="modalRef"
      title="Nome da Família"
    >
      <FamiliesForm
        :family="selectedFamily"
        @on-close-modal="closeModal"
      />
    </Modal>
  </div>
</template>