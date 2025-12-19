<script setup>
import { useRoute } from 'vue-router';
import { useReservasStore } from '../stores/reservas';
import { computed } from 'vue';
import ActionButton from './ActionButton.vue';

const route = useRoute();
const reservasStore = useReservasStore();
const reservaId = route.params.id;

const reserva = computed(() => reservasStore.getReserva(reservaId));

function cancel() {
  window.history.back();
}

function save() {
  reservasStore.updateReserva(reservaId, reserva.value);
  window.history.back();
}
</script>

<template>
  <div v-if="reserva">
    <div class="form-container">
      <label>Fecha: <input type="date" v-model="reserva.date" /></label>
      <label
        >Descripción:
        <input type="text" v-model="reserva.description" placeholder="Descripción del Evento"
      /></label>
      <label
        >Nombre: <input type="text" v-model="reserva.clientName" placeholder="Nombre Cliente"
      /></label>
      <label
        >Email: <input type="email" v-model="reserva.clientEmail" placeholder="Email Cliente"
      /></label>
      <label
        >Telefono: <input type="tel" v-model="reserva.clientPhone" placeholder="Telefono Cliente"
      /></label>
      <label
        >Total en pesos: <input type="text" v-model="reserva.totalAmount" placeholder="0"
      /></label>

      <label
        >Cantidad de Invitados:
        <input type="number" min="0" max="100" v-model="reserva.guestCount" placeholder="0"
      /></label>

      <label
        >Estado:
        <select v-model="reserva.status" placeholder="Selecciona">
          <option value="confirmada">Confirmada</option>
          <option value="pendiente">Pendiente</option>
          <option value="cancelada">Cancelada</option>
        </select>
      </label>

      <div class="buttons-container">
        <ActionButton type="primary" label="Guardar" @click="save" />
        <ActionButton type="secondary" label="Cancelar" @click="cancel" />
      </div>
    </div>
  </div>

  <div v-else>
    <p>Reserva no encontrada</p>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}

.buttons-container {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
