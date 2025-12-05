import { createRouter, createWebHistory } from 'vue-router';
import Reservas from '../components/reservas.vue';
import Clientes from '../components/Clientes.vue';
import Presupuestos from '../components/Presupuestos.vue';
import Reserva from '../components/Reserva.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', name: 'Home', component: Landing },
    { path: '/', redirect: '/reservas' },
    { path: '/reservas', name: 'Reservas', component: Reservas },
    { path: '/clientes', name: 'Clientes', component: Clientes },
    { path: '/presupuestos', name: 'Presupuestos', component: Presupuestos },
    { path: '/reserva/:id', name: 'Reserva', component: Reserva },
  ],
});

export default router;
