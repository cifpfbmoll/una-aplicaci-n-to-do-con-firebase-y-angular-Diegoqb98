# 📚 Documentación del Proyecto

## Descripción General

Esta es una aplicación Todo desarrollada con Angular 18 y Firebase. El objetivo es aprender cómo integrar Firebase Firestore con Angular para crear una aplicación con datos en tiempo real.

## Componentes Principales

### 1. TaskFormComponent
Componente que contiene el formulario para agregar nuevas tareas. Tiene dos campos:
- **Título** (obligatorio)
- **Descripción** (opcional)

Cuando el usuario hace click en "Agregar Tarea", se guarda en Firebase.

### 2. TaskListComponent
Muestra todas las tareas que hay en la base de datos. También muestra las estadísticas:
- Total de tareas
- Tareas pendientes
- Tareas completadas

Este componente se suscribe a los cambios de Firebase para actualizar la lista automáticamente.

### 3. TaskItemComponent
Representa una tarea individual. Cada tarea tiene:
- Checkbox para marcarla como completada
- Título y descripción
- Botón para eliminarla
- Fecha de creación

## Servicio TaskService

El servicio `task.service.ts` es el que se comunica con Firebase. Tiene estos métodos:

- `getTasks()`: Obtiene todas las tareas de Firestore
- `createTask()`: Crea una nueva tarea
- `updateTask()`: Actualiza una tarea existente
- `deleteTask()`: Elimina una tarea
- `toggleTaskCompletion()`: Cambia el estado de completada/pendiente

## Configuración de Firebase

Para conectar la aplicación con Firebase necesitas:

1. Crear un proyecto en Firebase Console
2. Activar Firestore Database
3. Copiar las credenciales
4. Pegarlas en `src/environments/environment.ts`

Las credenciales incluyen:
- apiKey
- authDomain
- projectId
- storageBucket
- messagingSenderId
- appId

## Modelo de Datos

Las tareas tienen esta estructura en Firebase:

```typescript
interface Task {
  id?: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

## Flujo de la Aplicación

1. Usuario abre la app → TaskListComponent carga todas las tareas
2. Usuario escribe una tarea → TaskFormComponent la guarda en Firebase
3. Firebase actualiza → TaskListComponent recibe el cambio automáticamente
4. Usuario marca como completada → TaskService actualiza Firebase
5. Usuario elimina tarea → TaskService la borra de Firebase

## Archivos Importantes

- `app.config.ts`: Configuración de Firebase
- `task.service.ts`: Lógica para comunicarse con Firebase
- `task.interface.ts`: Define cómo son las tareas
- `environment.ts`: Credenciales de Firebase

## Estilos

La aplicación usa SCSS para los estilos. Los colores principales son:
- Púrpura/azul para el fondo
- Coral/naranja para botones y acentos
- Blanco con transparencias (efecto glassmorphism)

El diseño es responsive, se adapta a móviles y tablets.
