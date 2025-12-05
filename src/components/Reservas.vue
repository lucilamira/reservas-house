<script setup>
import ActionButton from './ActionButton.vue';
import FormReserva from './FormReserva.vue';
import { ref } from 'vue';
import { useReservasStore } from '../stores/reservas';

const reservasStore = useReservasStore();

const showForm = ref(false);
</script>

<template>
  <div class="container">
    <ActionButton type="primary" label="Añadir Reserva" @click="showForm = true"></ActionButton>
    <FormReserva v-model="showForm" v-model:reservas="reservas" />

    <div class="table-container">
      <h3 class="table-title">Reservas</h3>
      <div v-if="reservasStore.reservas.length > 0">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Descripcion</th>
              <th>Cliente</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(reserva, index) in reservasStore.reservas" :key="index">
              <td>{{ reserva.date }}</td>
              <td>{{ reserva.description }}</td>
              <td>{{ reserva.clientName }}</td>
              <td>{{ reserva.status }}</td>
              <td class="actions-container">
                <div class="tooltip">Editar</div>
                <router-link :to="`/reserva/${index}`">
                  <img
                    class="icon"
                    width="24"
                    height="24"
                    src="https://img.icons8.com/ios/50/edit-file.png"
                    alt="edit-file"
                /></router-link>
                <div class="tooltip">Eliminar</div>
                <img
                  class="icon"
                  @click="reservasStore.deleteReserva(index)"
                  width="24"
                  height="24"
                  src="https://img.icons8.com/ios-glyphs/30/filled-trash.png"
                  alt="filled-trash"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="no-data" v-else>No hay reservas disponibles. Añade una para empezar</div>
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
  background-color: #e2dcda;
  font-weight: bold;
}

button {
  display: block;
  margin-bottom: 20px;
}

.icon {
  cursor: pointer;
}

.no-data {
  text-align: left;
  padding: 20px;
  color: #52414cff;
  font-size: 20px;
  font-weight: 400;
}

.actions-container {
  display: flex;
  gap: 10px;
}

.tooltip {
  visibility: hidden;
  width: 60px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position the tooltip above the icon */
}
</style>
