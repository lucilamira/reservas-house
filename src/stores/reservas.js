import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useReservasStore = defineStore('reservas', () => {
  const reservas = ref([]);

  function addReserva(reserva) {
    reservas.value.push(reserva);
  }

  function updateReserva(index, reserva) {
    reservas.value[index] = reserva;
  }

  function deleteReserva(index) {
    reservas.value.splice(index, 1);
  }

  function getReserva(index) {
    return reservas.value[index];
  }

  return {
    reservas,
    addReserva,
    updateReserva,
    deleteReserva,
    getReserva,
  };
});
