import { defineStore } from 'pinia';
import { ref } from 'vue';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../index.js';

export const useReservasStore = defineStore('reservas', () => {
  const reservas = ref([]);

  async function addReserva(reserva) {
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
    }
  }

  async function updateReserva(id, reserva) {
    try {
      const docRef = doc(db, 'reservas', id);
      const { id: _, ...reservaData } = reserva;
      await updateDoc(docRef, reservaData);

      const index = reservas.value.findIndex((r) => r.id === id);
      if (index !== -1) {
        reservas.value[index] = { id, ...reservaData };
      }
      console.log('Reserva actualizada correctamente');
    } catch (err) {
      console.error('Error updating reserva:', err);
    }
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
    try {
      const querySnapshot = await getDocs(collection(db, 'reservas'));
      reservas.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log('Fetched reservas:', reservas.value);
    } catch (err) {
      console.error('Error fetching reservas:', err);
    }
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
