<script setup>
import { onMounted, ref, reactive, watch } from 'vue';
import { debounce } from 'vue-debounce';
import { useRouter } from 'vue-router';
import { PhPlus, PhTrash, PhNotePencil, PhArrowLeft } from '@phosphor-icons/vue';
import { collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/services/firebase-firestore';
import Wrapper from '@/components/shared/Wrapper.vue';
import Text from '@/components/shared/Text.vue';
import Search from '@/components/shared/Search.vue';
import Button from '@/components/shared/Button.vue';
import Loader from '@/components/shared/Loader.vue';
import Dialog from '@/components/shared/Dialog.vue';
import Modal from '@/components/shared/Modal.vue';
import FamiliesForm from '@/components/forms/FamiliesForm.vue';

const router = useRouter();
const isLoading = ref(true);
const dialogRef = ref(null);
const allFamilies = ref([]);
const families = ref([]);

const loadData = async () => {
  onSnapshot(collection(db, 'families'), (querySnapshot) => {
    const array = [];

    querySnapshot.forEach(doc => {
      const family = {
        id: doc.id,
        name: doc.data().name,
        drawn: doc.data().drawn
      };

      array.push(family);
    });

    allFamilies.value = array;
    families.value = array;
    isLoading.value = false;
  });
};

onMounted(() => {
  loadData();
});

const selectedFamily = ref(null);

const handleEditFamily = (family) => {
  selectedFamily.value = family;
  showModal();
};

const deleteFamily = async () => {
  try {
    const familyDocRef = doc(db, 'families', selectedFamily.value.id);
    await deleteDoc(familyDocRef);
    console.log('Família excluída com sucesso');
  } catch (error) {
    console.error('Erro ao excluir família:', error);
  }
};

const handleDeleteFamily = async (family) => {
  selectedFamily.value = family;
  dialogRef.value?.openModal();
};

const search = ref('');

const filterFamilies = (searchValue) => {
  if (searchValue.trim() === '') {
    families.value = allFamilies.value;
  } else {
    const lowerSearch = searchValue.toLowerCase();
    families.value = allFamilies.value.filter(family => 
      family.name.toLowerCase().includes(lowerSearch)
    );
  }
};

const handleDebounce = debounce((search) => {
  filterFamilies(search);
}, '500ms');

watch(search, (newSearch) => {
  handleDebounce(newSearch);
});

const modalRef = ref(null);

const showModal = () => {
  modalRef.value?.setOpen();
};

const closeModal = () => {
  modalRef.value?.closeModal();
};

const handleAddFamily = () => {
  selectedFamily.value = null;
  showModal();
};

const tableHead = reactive(['#', 'Nome', 'Ações']);
</script>

<template>
  <div class="w-5/6 md:w-5/6 lg:w-4/6 mx-auto my-5 p-4">
    <div class="flex justify-start items-center gap-4">
      <ph-arrow-left
        :size="32"
        class="text-success cursor-pointer"
        @click="router.push('/')"
      />
      
      <Text 
        text="Cadastro de Famílias"
        weight="bold"
        size="xl"
      />
    </div>

    <Wrapper>
      <div class="flex justify-between items-center w-full my-5">
        <Search
          v-model="search"
          placeholder="Buscar família"
        />

        <Button @click="handleAddFamily">
          <ph-plus :size="20" />
        
          <span class="hidden md:block">
            Adicionar
          </span>
        </Button>
      </div>

      <div
        v-if="isLoading || (!isLoading && !families.length)"
        class="flex justify-center items-center w-full text-white my-10"
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
          <thead class="border-b border-gray-700 text-gray-500">
            <tr>
              <th
                v-for="(item, i) in tableHead"
                :key="i"
                scope="col"
                class="px-6 py-3"
              >
                {{ item }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item, i) in families"
              :key="i"
              class="border-b border-gray-700 hover:bg-gray-700 hover:text-white"
            >
              <th
                scope="row"
                class="w-[10%] px-6 py-4 font-medium text-gray-500 whitespace-nowrap"
              >
                #{{ i + 1 }}
              </th>

              <td class="px-6 py-4">
                <div class="flex justify-start items-center">
                  <svg
                    v-if="item.drawn"
                    class="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>

                  <svg
                    v-else
                    class="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
      
                  {{ item.name }}
                </div>
              </td>

              <td class="w-[20%] px-6 py-4">
                <div class="flex gap-3">
                  <Button
                    size="small"
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
    </Wrapper>

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