import { defineStore } from 'pinia';
import { ref } from 'vue';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../index.js';

export const useReservasStore = defineStore('reservas', () => {
  const reservas = ref([]);

  async function addReserva(reserva) {
    // loading.value = true;
    // error.value = null;
    try {
      const docRef = await addDoc(collection(db, 'reservas'), reserva);
      reservas.value.push({
        id: docRef.id,
        ...reserva,
      });
    } catch (err) {
      error.value = err.message;
      console.error('Error adding reserva:', err);
    } finally {
      // loading.value = false;
    }
  }

  function updateReserva(index, reserva) {
    reservas.value[index] = reserva;
  }

  async function deleteReserva(id) {
    try {
      await deleteDoc(doc(db, 'reservas', id));
      reservas.value = reservas.value.filter((r) => r.id !== id);
    } catch (err) {
      console.error('Error deleting reserva:', err);
    }
  }

  function getReserva(id) {
    console.log('recibo este id para buscar en base', id);
    return reservas.value.find((r) => r.id === id);
  }

  async function fetchReservas() {
    const querySnapshot = await getDocs(collection(db, 'reservas'));
    reservas.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    console.log('Fetched reservas:', reservas.value);
  }

  return {
    reservas,
    fetchReservas,
    addReserva,
    updateReserva,
    deleteReserva,
    getReserva,
  };
});
