<script setup>
import router from '../router';
import ActionButton from './ActionButton.vue';
</script>

<template>
  <ul class="list">
    <li class="list-item">
      <router-link to="/reservas">
        <ActionButton type="navigation" label="Reservas"></ActionButton>
      </router-link>
    </li>
    <li class="list-item">
      <router-link to="/clientes">
        <ActionButton type="navigation" label="Clientes"></ActionButton
      ></router-link>
    </li>
    <li class="list-item">
      <router-link to="/presupuestos">
        <ActionButton type="navigation" label="Presupuestos"></ActionButton
      ></router-link>
    </li>
  </ul>
</template>

<style scoped>
.list {
  list-style-type: none;
  padding: 1rem;
}

.list-item {
  margin-bottom: 1rem;
  min-width: max-content;
}

a {
  text-decoration: none;
}
</style>
