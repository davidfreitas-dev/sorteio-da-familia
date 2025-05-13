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
import Select from '@/components/shared/Select.vue';
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
const tableHead = reactive(['#', 'Nome', 'Status', 'Sorteado em', 'Ações']);

const { isLoading, withLoading } = useLoading();

const loadData = async () => {
  await withLoading(async () => {
    await familyStore.fetchFamilies();
  });
};

onMounted(() => {
  loadData();
});

const filterOptions = [
  { name: 'Todos', value: 'all' },
  { name: 'Sorteados', value: 'drawn' },
  { name: 'Disponíveis', value: 'not_drawn' },
];
const selectedFilter = ref(filterOptions[0]);

const families = computed(() => {
  let filtered = familyStore.families;

  if (selectedFilter.value.value === 'drawn') {
    filtered = filtered.filter(f => f.drawn);
  } else if (selectedFilter.value.value === 'not_drawn') {
    filtered = filtered.filter(f => f.drawn === false);
  }

  if (search.value.trim()) {
    const lowerSearch = search.value.toLowerCase();
    filtered = filtered.filter(family =>
      family.name.toLowerCase().includes(lowerSearch)
    );
  }

  return filtered;
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
  await withLoading(async () => {
    await familyStore.deleteFamily(selectedFamily.value.id);
  }, 'Falha ao excluir o registro.');
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
      <div class="flex flex-col md:flex-row gap-4 w-full p-5">
        <div class="w-full md:w-1/2">
          <Search
            v-model="search"
            placeholder="Buscar por nome"
          />
        </div>

        <div class="w-full md:w-1/2">
          <Select
            v-model="selectedFilter"
            :options="filterOptions"
          />
        </div>
      </div>

      <div
        v-if="isLoading || (!isLoading && !families.length)"
        class="flex justify-center items-center w-full text-font p-10"
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
              :class="[ 'hover:bg-neutral hover:text-font', i !== families.length - 1 ? 'border-b border-neutral' : '' ]"
            >
              <th
                scope="row"
                class="px-8 py-4 w-[10%] max-w-[100px] truncate whitespace-nowrap overflow-hidden font-medium text-font-accent"
              >
                #{{ i + 1 }}
              </th> 
              <td class="px-8 py-4 w-[35%] max-w-[350px] truncate whitespace-nowrap overflow-hidden text-font">
                {{ item.name }}
              </td> 
              <td class="px-8 py-4 w-[10%] max-w-[100px]">
                <Badge
                  :label="item.drawn ? 'Sorteado' : 'Disponível'"
                  :color="item.drawn ? 'success' : 'secondary'"
                /> 
              </td> 
              <td class="px-8 py-4 w-[30%] max-w-[300px] truncate whitespace-nowrap overflow-hidden text-font">
                {{ $filters.formatDate(item.drawnAt) }}
              </td> 
              <td class="px-8 py-4 w-[15%] max-w-[150px]">
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