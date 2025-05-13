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
  const unsubscribeFamilies = ref(null);
  const unsubscribeFamiliesNotDrawn = ref(null);

  const fetchFamilies = async () => {
    if (unsubscribeFamilies.value) {
      unsubscribeFamilies.value(); // Encerra escuta anterior
    }

    const q = query(collection(db, 'families'), orderBy('name'));

    return new Promise((resolve, reject) => {
      unsubscribeFamilies.value = onSnapshot(q, (snapshot) => {
        families.value = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            drawnAt: data.drawnAt?.toDate?.() || null
          };
        });

        resolve();
      }, (error) => {
        reject(error);
      });
    });
  };

  const fetchFamiliesNotDrawn = async () => {
    if (unsubscribeFamiliesNotDrawn.value) {
      unsubscribeFamiliesNotDrawn.value(); // Encerra escuta anterior
    }

    const q = query(
      collection(db, 'families'),
      where('drawn', '==', false),
      orderBy('name')
    );

    return new Promise((resolve, reject) => {
      unsubscribeFamiliesNotDrawn.value = onSnapshot(q, (snapshot) => {
        familiesNotDrawn.value = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            drawnAt: data.drawnAt?.toDate?.() || null
          };
        });

        resolve();
      }, (error) => {
        reject(error);
      });
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
    const { id: _, ...dataWithoutId } = updatedData;

    await updateDoc(doc(db, 'families', id), {
      ...dataWithoutId,
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

  const confirmFamilyDraw = async (id) => {
    await updateDoc(doc(db, 'families', id), {
      drawn: true,
      drawnAt: serverTimestamp()
    });
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
    unsubscribeFamilies.value?.();
    unsubscribeFamiliesNotDrawn.value?.();
    unsubscribeFamilies.value = null;
    unsubscribeFamiliesNotDrawn.value = null;
  };

  const resetFamilies = () => {
    families.value = [];
  };

  return {
    families,
    familiesNotDrawn,
    fetchFamilies,
    fetchFamiliesNotDrawn,
    addFamily,
    updateFamily,
    deleteFamily,
    getFamilyById,
    confirmFamilyDraw,
    resetFamiliesDrawnStatus,
    stopListeningFamilies,
    resetFamilies
  };
});
