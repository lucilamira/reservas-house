<script setup>
import { useRoute } from 'vue-router';
import { useReservasStore } from '../stores/reservas';
import { computed } from 'vue';

const route = useRoute();
const reservasStore = useReservasStore();
const reservaId = route.params.id;

const reserva = computed(() => reservasStore.getReserva(reservaId));
</script>

<template>
  <div v-if="reserva">
    <h2>Editar Reserva #{{ reservaId }}</h2>
    <p><strong>Fecha:</strong> {{ reserva.date }}</p>
    <p><strong>Descripción:</strong> {{ reserva.description }}</p>
    <p><strong>Cliente:</strong> {{ reserva.clientName }}</p>
    <p><strong>Email:</strong> {{ reserva.clientEmail }}</p>
    <p><strong>Teléfono:</strong> {{ reserva.clientPhone }}</p>
    <p><strong>Monto Total:</strong> {{ reserva.totalAmount }}</p>
    <p><strong>Cantidad de Invitados:</strong> {{ reserva.guestCount }}</p>
    <p><strong>Estado:</strong> {{ reserva.status }}</p>
  </div>
  <div v-else>
    <p>Reserva no encontrada</p>
  </div>
</template>

<style scoped></style>
