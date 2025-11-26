<script setup>
import ActionButton from './ActionButton.vue';
</script>
<template>
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
  <ActionButton type="primary" label="Guardar" />
  <ActionButton type="secondary" label="Cancelar" />
</template>
<style scoped></style>
