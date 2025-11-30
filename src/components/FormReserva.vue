<script setup>
import ActionButton from './ActionButton.vue';
import { ref } from 'vue';

const formOpen = defineModel({ type: Boolean, default: false });

function cancel() {
  formOpen.value = false;
  // Lógica para cancelar la reserva
}

function save() {
  // Lógica para guardar la reserva
  formOpen.value = false;
}
</script>

<template>
  <div v-if="formOpen">
    <h3>Añadir Reserva</h3>
    <input type="date" />
    <input type="text" placeholder="Descripción" />
    <input type="text" placeholder="Nombre Cliente" />
    <input type="email" placeholder="Email Cliente" />
    <input type="tel" placeholder="Telefono Cliente" />
    <select>
      <option>Confirmada</option>
      <option>Pendiente</option>
      <option>Cancelada</option>
    </select>
    <div class="buttons-container">
      <ActionButton type="primary" label="Guardar" @click="save" />
      <ActionButton type="secondary" label="Cancelar" @click="cancel" />
    </div>
  </div>
</template>

<style scoped>
.buttons-container {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
