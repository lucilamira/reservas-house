# Reservas House

**Práctica Final del Bootcamp de Desarrollo Frontend Moderno**

## Descripción del Proyecto

El proyecto consta de un sistema simple de reservas para el personal del house del barrio en donde actualmente vivo (es un salón de usos múltiples que se encuentra en el área compartida de un barrio privado/cerrado, allí los vecinos del mismo pueden celebrar eventos privados), el mismo no tiene ningún sistema y no tienen una forma organizada de anotar los eventos que tienen próximamente así como los clientes o presupuestos entregados.

La idea principal es ofrecer una página donde se puedan ver los eventos agendados y agendar nuevos, y si es posible dejar las bases para escalar el proyecto en el futuro para incluir una base de clientes y de presupuestos.

El proyecto se desarrolló con Vue.js 3, utilizando Firebase Firestore como base de datos y Pinia para la gestión de estado.

## Tecnologías Utilizadas

- **Frontend Framework**: Vue.js 3 (Composition API)
- **Enrutamiento**: Vue Router 4
- **Gestión de Estado**: Pinia
- **Base de Datos**: Firebase Firestore
- **Herramienta de Build**: Vite
- **Lenguaje**: JavaScript (ES6+)

## Instalación y Configuración

### 1. Instalación de Dependencias

Al descargar el proyecto, ejecuta los siguientes comandos desde la terminal en el directorio del proyecto:

```bash
npm install
```

### 2. Configuración de Firebase

Crea un archivo `src/index.js` con tu configuración de Firebase:

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  projectId: 'TU_PROJECT_ID',
  storageBucket: 'TU_STORAGE_BUCKET',
  messagingSenderId: 'TU_MESSAGING_SENDER_ID',
  appId: 'TU_APP_ID',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
```

### 3. Configurar Reglas de Firestore

En Firebase Console → Firestore Database → Reglas:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reservas/{reservaId} {
      allow read, write: if true; // Para desarrollo
      // Para producción: allow read, write: if request.auth != null;
    }
  }
}
```

### 4. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

Luego en el explorador ir a: [http://localhost:5173/](http://localhost:5173/)

## Estructura del Proyecto

```
reservas-house/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ActionButton.vue      # Componente reutilizable de botones
│   │   ├── Clientes.vue          # Módulo de clientes (próximamente)
│   │   ├── FormReserva.vue       # Formulario para crear reservas
│   │   ├── Navigation.vue        # Menú de navegación lateral
│   │   ├── Presupuestos.vue      # Módulo de presupuestos (próximamente)
│   │   ├── Reserva.vue           # Vista de edición de reserva individual
│   │   └── reservas.vue          # Lista de reservas (vista principal)
│   ├── router/
│   │   └── index.js              # Configuración de rutas
│   ├── stores/
│   │   └── reservas.js           # Store de Pinia para gestión de reservas
│   ├── App.vue                   # Componente raíz
│   ├── index.js                  # Configuración de Firebase
│   └── main.js                   # Punto de entrada de la aplicación
├── index.html
├── package.json
├── vite.config.js
└── firebase.json
```

## Funcionalidades Principales

### 1. Gestión de Reservas

#### Crear Reserva

- Formulario con campos: fecha, descripción, nombre del cliente, email, teléfono, monto total, cantidad de invitados y estado
- Validación de campos requeridos
- Guardado automático en Firestore

#### Listar Reservas

- Tabla con todas las reservas
- Columnas: Fecha, Descripción, Cliente, Estado, Acciones
- Actualización en tiempo real desde Firestore

#### Editar Reserva

- Click en icono de editar para modificar
- Formulario pre-cargado con datos existentes
- Actualización en Firestore al guardar

#### Eliminar Reserva

- Click en icono de eliminar
- Eliminación inmediata de Firestore

### 2. Navegación

- **Menú lateral fijo** con tres módulos:
  - Reservas (funcional)
  - Clientes (próximamente)
  - Presupuestos (próximamente)

### 3. Componentes Reutilizables

#### ActionButton

Botón con 3 variantes de estilo:

- `primary`: Verde bosque (#347759) - acciones principales
- `secondary`: Gris (#ccdbdcff) - acciones secundarias
- `navigation`: Marrón tierra (#8B6F47) - navegación

```vue
<ActionButton type="primary" label="Guardar" @click="save" />
```

## Estructura de Datos

### Modelo de Reserva

```javascript
{
  id: String,              // Generado por Firestore
  date: String,            // Formato: YYYY-MM-DD
  description: String,     // Descripción del evento
  clientName: String,      // Nombre del cliente
  clientEmail: String,     // Email del cliente
  clientPhone: String,     // Teléfono del cliente
  totalAmount: String,     // Monto total en pesos
  guestCount: Number,      // Cantidad de invitados (0-100)
  status: String          // 'confirmada' | 'pendiente' | 'cancelada'
}
```

## Gestión de Estado con Pinia

### Store: `useReservasStore`

**Estado:**

- `reservas`: Array de reservas
- `loading`: Estado de carga
- `error`: Errores de operaciones

**Acciones:**

- `fetchReservas()`: Carga todas las reservas desde Firestore
- `addReserva(reserva)`: Agrega nueva reserva
- `updateReserva(id, reserva)`: Actualiza reserva existente
- `deleteReserva(id)`: Elimina reserva
- `getReserva(id)`: Obtiene una reserva específica

## Rutas

```
/                    → Redirect a /reservas
/reservas            → Lista de reservas
/reserva/:id         → Editar reserva específica
/clientes            → Módulo de clientes (próximamente)
/presupuestos        → Módulo de presupuestos (próximamente)
```

## Estilos y Diseño

### Paleta de Colores

- **Verde Bosque**: #347759 (botones primarios)
- **Marrón Tierra**: #8B6F47 (navegación)
- **Gris Claro**: #e2dcda (headers de tabla)
- **Gris Medio**: #ccdbdcff (botones secundarios)

### Layout

- **Header**: Fijo en la parte superior con título
- **Navegación**: Lateral izquierda, ancho automático (min 200px)
- **Contenido**: Ocupa el espacio restante, scrolleable

## Scripts Disponibles

```bash
# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Deploy a Firebase
firebase deploy
```

## Deployment

### Build y Deploy a Firebase Hosting

```bash
# 1. Build del proyecto
npm run build

# 2. Deploy a Firebase
firebase deploy --only hosting

# 3. Limpiar caché del navegador después del deploy
```

## Mejores Prácticas Implementadas

1. **Composition API**: Uso de `<script setup>` para código más limpio
2. **Componentes Reutilizables**: ActionButton para consistencia de UI
3. **Store Centralizado**: Pinia para gestión de estado global
4. **Async/Await**: Manejo de operaciones asíncronas con Firestore
5. **Error Handling**: Try-catch en todas las operaciones de base de datos
6. **Responsive Design**: Layout flexible con CSS Grid y Flexbox

## Próximas Funcionalidades

- [ ] Módulo de Clientes
- [ ] Módulo de Presupuestos
- [ ] Autenticación de usuarios
- [ ] Filtros y búsqueda en reservas
- [ ] Exportación de datos a PDF/Excel
- [ ] Dashboard con estadísticas
- [ ] Notificaciones por email

## Troubleshooting

### Error: "Missing or insufficient permissions"

**Solución**: Actualizar reglas de Firestore en Firebase Console

### Error: "await is not defined"

**Solución**: Asegurarse de usar `async` en funciones que usan `await`

### Los cambios no se reflejan después del deploy

**Solución**:

1. Hacer `npm run build` antes de deploy
2. Limpiar caché del navegador (Ctrl+Shift+R)

### Las reservas no se cargan

**Solución**: Verificar que `fetchReservas()` se llame en `onMounted`

## Contacto y Soporte

Para consultas o reportar issues, contactar al equipo de desarrollo.

---

**Versión**: 0.0.0  
**Última actualización**: Diciembre 2025
