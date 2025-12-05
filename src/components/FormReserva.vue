<script setup>
import ActionButton from './ActionButton.vue';
import { ref } from 'vue';
import { useReservasStore } from '../stores/reservas';

const formOpen = defineModel({ type: Boolean, default: false });
const reservasStore = useReservasStore();

const date = ref(new Date().toISOString().split('T')[0]);
const description = ref('');
const clientName = ref('');
const clientEmail = ref('');
const clientPhone = ref('');
const totalAmount = ref('');
const guestCount = ref('');
const status = ref('');

function cancel() {
  formOpen.value = false;
  clearForm();
}

function save() {
  const reserva = {
    date: date.value,
    description: description.value,
    clientName: clientName.value,
    clientEmail: clientEmail.value,
    clientPhone: clientPhone.value,
    totalAmount: totalAmount.value,
    guestCount: guestCount.value,
    status: status.value,
  };

  reservasStore.addReserva(reserva);
  formOpen.value = false;
  clearForm();
}

function clearForm() {
  date.value = new Date().toISOString().split('T')[0];
  description.value = '';
  clientName.value = '';
  clientEmail.value = '';
  clientPhone.value = '';
  totalAmount.value = '';
  guestCount.value = '';
  status.value = '';
}
</script>

<template>
  <div v-if="formOpen">
    <h3>Nueva Reserva</h3>
    <div class="form-container">
      <label>Fecha: <input type="date" v-model="date" /></label>
      <label
        >Descripción: <input type="text" v-model="description" placeholder="Descripción del Evento"
      /></label>
      <label>Nombre: <input type="text" v-model="clientName" placeholder="Nombre Cliente" /></label>
      <label>Email: <input type="email" v-model="clientEmail" placeholder="Email Cliente" /></label>
      <label
        >Telefono: <input type="tel" v-model="clientPhone" placeholder="Telefono Cliente"
      /></label>
      <label>Total en pesos: <input type="text" v-model="totalAmount" placeholder="0" /></label>

      <label
        >Cantidad de Invitados:
        <input type="number" min="0" max="100" v-model="guestCount" placeholder="0"
      /></label>

      <label
        >Estado:
        <select v-model="status" placeholder="Selecciona">
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
</template>

<style scoped>
.buttons-container {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, auto);
  gap: 1rem;
  margin-top: 1rem;
}
</style>
