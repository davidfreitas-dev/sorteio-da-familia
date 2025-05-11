import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  collection,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  where,
  serverTimestamp,
  writeBatch
} from 'firebase/firestore';
import { db } from '@/services/firebase-firestore';

export const useFamilyStore = defineStore('familyStore', () => {
  const families = ref([]);
  const familiesNotDrawn = ref([]);
  const unsubscribe = ref(null);

  const fetchFamilies = async () => {
    if (unsubscribe.value) {
      unsubscribe.value(); // Encerra escuta anterior
    }

    const q = query(collection(db, 'families'), orderBy('name'));

    unsubscribe.value = onSnapshot(q, (snapshot) => {
      families.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      console.log('Families: ', families.value);
    }, (error) => {
      console.error('Erro ao escutar famílias:', error);
    });
  };

  const fetchFamiliesNotDrawn = async () => {
    if (unsubscribe.value) {
      unsubscribe.value(); // Encerra escuta anterior
    }

    const q = query(
      collection(db, 'families'),
      where('drawn', '==', false),
      orderBy('name')
    );

    unsubscribe.value = onSnapshot(q, (snapshot) => {
      familiesNotDrawn.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
    }, (error) => {
      console.error('Erro ao escutar famílias não sorteadas:', error);
    });
  };

  const addFamily = async (family) => {
    const newFamily = {
      ...family,
      drawn: false,
      createdAt: serverTimestamp()
    };

    await addDoc(collection(db, 'families'), newFamily);
  };

  const updateFamily = async (id, updatedData) => {
    await updateDoc(doc(db, 'families', id), {
      ...updatedData,
      updatedAt: serverTimestamp()
    });
  };

  const deleteFamily = async (id) => {
    await deleteDoc(doc(db, 'families', id));
  };

  const getFamilyById = async (id) => {
    const snapshot = await getDoc(doc(db, 'families', id));
    if (!snapshot.exists()) return null;
    return { id: snapshot.id, ...snapshot.data() };
  };

  const resetFamiliesDrawnStatus = async () => {
    const batch = writeBatch(db);

    families.value.forEach((family) => {
      const familyRef = doc(db, 'families', family.id);
      batch.update(familyRef, { drawn: false });
    });

    await batch.commit();
  };

  const stopListeningFamilies = () => {
    unsubscribe.value?.();
    unsubscribe.value = null;
  };

  const resetFamilies = () => {
    families.value = [];
  };

  return {
    families,
    fetchFamilies,
    fetchFamiliesNotDrawn,
    addFamily,
    updateFamily,
    deleteFamily,
    getFamilyById,
    resetFamiliesDrawnStatus,
    stopListeningFamilies,
    resetFamilies
  };
});
