<script setup>
import ActionButton from './ActionButton.vue';
import FormReserva from './FormReserva.vue';
import { ref } from 'vue';

const showForm = ref(false);
</script>

<template>
  <div class="container">
    <ActionButton type="primary" label="Añadir Reserva" @click="showForm = true"></ActionButton>
    <!-- <div v-if="showForm"> -->
    <FormReserva v-model="showForm" />
    <!-- </div> -->
    <div class="table-container">
      <h3 class="table-title">Reservas</h3>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripcion</th>
            <th>Cliente</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-07-01</td>
            <td>Cumpleaños de 1</td>
            <td>Juan Pérez</td>
            <td>Confirmada</td>
          </tr>
          <tr>
            <td>2025-12-06</td>
            <td>Despedida de soltera</td>
            <td>Noelia Gomez</td>
            <td>Pendiente</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.table-container {
  margin-top: 3rem;
}

.table-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f5f5f5;
  font-weight: bold;
}

button {
  display: block;
  margin-bottom: 20px;
}
</style>
