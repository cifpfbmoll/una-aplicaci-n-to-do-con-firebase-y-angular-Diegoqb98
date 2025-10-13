# � Angular Firebase Todo App

[![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=for-the-badge&logo=angular)](https://angular.dev)
[![Firebase](https://img.shields.io/badge/Firebase-10.14.1-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![SCSS](https://img.shields.io/badge/SCSS-CSS3-CC6699?style=for-the-badge&logo=sass)](https://sass-lang.com)

Una aplicación moderna de lista de tareas construida con **Angular 18** y **Firebase Firestore** que permite gestionar tareas con sincronización en tiempo real. Desarrollada siguiendo las mejores prácticas de Angular con arquitectura basada en componentes y servicios.

## ✨ Vista Previa

La aplicación está disponible en desarrollo en: **http://localhost:4200**

### 🎨 Diseño Moderno y Elegante

![Angular Firebase Todo App - Captura Principal](docs/images/todo-app-main-screenshot.png)

*Captura del diseño actual - Dashboard moderno con sidebar, estadísticas y lista de tareas*

### 🌟 Características Visuales Destacadas

- **🎨 Diseño Glassmorphism**: Efectos de cristal con transparencias y blur
- **🌈 Gradientes Modernos**: Paleta coral, turquesa y púrpura 
- **📱 Layout Responsive**: Dashboard adaptativo con sidebar colapsable
- **✨ Micro-animaciones**: Efectos hover y transiciones suaves
- **🎯 UI Intuitiva**: Controles táctiles y navegación clara

## 🚀 Características Principales

### 📝 Gestión de Tareas
- ✅ **Crear tareas** - Formulario intuitivo con validación en tiempo real
- ✅ **Categorización** - Sistema de prioridades (Urgente, Normal)
- ✅ **Estados dinámicos** - Pendientes y completadas con indicadores visuales
- ✅ **Eliminación segura** - Confirmación antes de borrar tareas

### 📊 Dashboard Interactivo  
- 📈 **Estadísticas en vivo** - Total, pendientes y completadas
- 🎯 **Filtros inteligentes** - Vista por estado de las tareas
- 📱 **Sidebar adaptativo** - Panel de control colapsable
- 🔄 **Sincronización Firebase** - Actualizaciones en tiempo real

### 🎨 Experiencia de Usuario
- 🌟 **Diseño glassmorphism** - Efectos de cristal y transparencias
- 🎭 **Animaciones fluidas** - Transiciones suaves y micro-interacciones
- 📱 **Totalmente responsive** - Optimizado para móviles, tablets y desktop
- 🎨 **Paleta moderna** - Gradientes coral, turquesa y púrpura

### 📸 Análisis de la Interfaz Actual

Como se observa en la captura superior, la aplicación presenta:

#### 🏠 **Hero Section**
- **Título principal**: "Lista de Tareas - Firebase & Angular"
- **Mensaje inspiracional**: "Organiza tu vida con estilo..."
- **Fondo gradiente**: Transición púrpura-azul elegante

#### 🎛️ **Panel de Control (Sidebar)**
- **📝 Formulario Nueva Tarea**: Input moderno con placeholder intuitivo
- **⚡ Acciones Rápidas**: Botones Descripción, Urgente, Normal
- **📊 Tarjeta Estadísticas**: Métricas visuales con gradientes
  - Total: 12 tareas
  - Pendientes: 8
  - Completadas: 4

#### 📋 **Área Principal**
- **🎯 Navegación por pestañas**: Todas, Pendientes, Completadas
- **📈 Resumen visual**: Contadores 3 Total, 3 Pendientes, 0 Completadas
- **📄 Lista de tareas**: Cards modernas con prioridades y estados
- **✏️ Ejemplo de tarea**: "Primera entrega" con descripción y estado pendiente

## 🛠️ Stack Tecnológico

- **Frontend**: Angular 18
- **Backend**: Firebase Firestore
- **Estilos**: SCSS con variables CSS personalizadas
- **Tipografía**: Inter (Google Fonts)

## 📋 Prerrequisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- **Node.js**: versión 18.19.1 o superior (Recomendado: v22.20.0)
- **npm**: versión 9.2.0 o superior (Incluido con Node.js)
- **Angular CLI**: Se instalará globalmente durante la configuración
- **Cuenta de Firebase**: Para la base de datos Firestore

## ⚡ Instalación y Configuración Rápida

### 1. Clonar el proyecto

```bash
git clone <url-del-repositorio>
cd angular-firebase-todo-app
```

### 2. Instalar dependencias

```bash
# Instalar Angular CLI globalmente (si no lo tienes)
npm install -g @angular/cli

# Instalar dependencias del proyecto
npm install
```

### 3. Configurar PowerShell (Solo Windows)

Si estás en Windows y tienes problemas con npm, ejecuta:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 4. Configurar Firebase

#### 4.1 Crear proyecto Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en **"Crear proyecto"** o usa uno existente
3. Sigue el asistente de configuración:
   - Nombra tu proyecto
   - (Opcional) Habilita Google Analytics
   - Acepta los términos y crea el proyecto

#### 4.2 Configurar Firestore Database

1. En el panel izquierdo, ve a **"Firestore Database"**
2. Haz clic en **"Crear base de datos"**
3. Selecciona **"Comenzar en modo de prueba"** (para desarrollo)
4. Elige una ubicación cercana para tu base de datos
5. Haz clic en **"Listo"**

#### 4.3 Obtener configuración de Firebase

1. Ve a **"Configuración del proyecto"** (ícono de engranaje ⚙️)
2. En la pestaña **"General"**, desplázate hasta **"Tus apps"**
3. Si no tienes una app web, haz clic en **"Agregar app"** > ícono web (`</>`)
4. Registra tu app con un nombre (ej: "Angular Todo App")
5. Copia la configuración que aparece

#### 4.4 Configurar variables de entorno

**El proyecto ya incluye configuración de Firebase funcionando**. Si quieres usar tu propio proyecto, edita estos archivos:

**`src/environments/environment.ts`:**
```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "tu-api-key-aquí",
    authDomain: "tu-project-id.firebaseapp.com",
    projectId: "tu-project-id",
    storageBucket: "tu-project-id.appspot.com",
    messagingSenderId: "tu-messaging-sender-id",
    appId: "tu-app-id"
  }
};
```

**`src/environments/environment.prod.ts`:** *(mismo contenido pero con `production: true`)*

#### 4.5 Configurar reglas de Firestore

En Firebase Console → "Firestore Database" → "Reglas":

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permite lectura y escritura en la colección 'tasks'
    match /tasks/{document} {
      allow read, write: if true;
    }
  }
}
```

> ⚠️ **Importante**: Estas son reglas de desarrollo que permiten acceso total. Para producción, implementa autenticación y reglas de seguridad apropiadas.

## 🚀 Ejecutar la Aplicación

### Modo Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start

# O alternativamente
ng serve
```

✅ **La aplicación estará disponible en:** `http://localhost:4200`

- ✨ **Hot Reload**: Los cambios se reflejan automáticamente
- 🔄 **Live Sync**: Sincronización en tiempo real con Firebase
- 🛠️ **DevTools**: Herramientas de desarrollo habilitadas

### Compilación para Producción

```bash
# Construir aplicación optimizada
npm run build

# Construir con configuración específica
ng build --configuration production
```

📦 **Los archivos se generarán en:** `dist/angular-firebase-todo-app/`

### Otros Comandos Útiles

```bash
# Ejecutar en modo watch (recompila automáticamente)
npm run watch

# Ejecutar pruebas unitarias
npm test

# Verificar y corregir código (linting)
ng lint
```

## 📱 Uso

1. **Agregar una tarea**: Completa el formulario en la parte superior con el título (obligatorio) y descripción (opcional), luego haz clic en "Agregar Tarea"

2. **Marcar como completada**: Haz clic en el checkbox al lado de cualquier tarea para marcarla como completada o pendiente

3. **Eliminar una tarea**: Haz clic en el ícono de papelera (🗑️) para eliminar una tarea permanentemente

4. **Ver estadísticas**: En la parte superior de la lista verás el total de tareas, pendientes y completadas

## 🏗️ Arquitectura del Proyecto

### Estructura de Directorios

```
angular-firebase-todo-app/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 components/           # Componentes de la aplicación
│   │   │   ├── task-form/          # 📝 Formulario de nueva tarea
│   │   │   ├── task-item/          # 📄 Item individual de tarea
│   │   │   └── task-list/          # 📋 Lista y gestión de tareas
│   │   ├── 📁 models/              # 🔧 Tipos e interfaces TypeScript
│   │   │   └── task.interface.ts   # 📋 Interface de Task
│   │   ├── 📁 services/            # ⚙️ Lógica de negocio
│   │   │   └── task.service.ts     # 🔥 Servicio Firebase CRUD
│   │   ├── app.component.*         # 🏠 Componente raíz
│   │   ├── app.config.ts          # ⚙️ Configuración de la app
│   │   └── app.routes.ts          # 🛣️ Rutas de la aplicación
│   ├── 📁 environments/            # 🌍 Variables de entorno
│   │   ├── environment.ts         # 🔧 Configuración desarrollo
│   │   └── environment.prod.ts    # 🚀 Configuración producción
│   ├── index.html                 # 🌐 Página principal
│   ├── main.ts                    # 🚀 Punto de entrada
│   └── styles.scss               # 🎨 Estilos globales
├── 📁 public/                     # 📦 Recursos estáticos
├── angular.json                  # ⚙️ Configuración Angular CLI
├── package.json                  # 📦 Dependencias y scripts
└── README.md                     # 📚 Documentación
```

### Componentes Principales

#### 🧩 TaskFormComponent
- **Función**: Formulario para crear nuevas tareas
- **Características**: Validación, campos título y descripción
- **Ubicación**: `src/app/components/task-form/`

#### 📋 TaskListComponent  
- **Función**: Lista y gestiona todas las tareas
- **Características**: Filtrado, estadísticas, operaciones CRUD
- **Ubicación**: `src/app/components/task-list/`

#### 📄 TaskItemComponent
- **Función**: Representa una tarea individual
- **Características**: Toggle completado, botón eliminar, estados visuales
- **Ubicación**: `src/app/components/task-item/`

#### ⚙️ TaskService
- **Función**: Gestión de datos con Firebase Firestore
- **Métodos**: `getTasks()`, `createTask()`, `updateTask()`, `deleteTask()`
- **Ubicación**: `src/app/services/task.service.ts`

## 🎨 Características de Diseño

- **Tema moderno**: Colores y tipografía contemporáneos
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Animaciones**: Transiciones suaves y efectos hover
- **Estados visuales**: Loading, error y estados vacíos
- **Accesibilidad**: Etiquetas y controles accesibles

## � Scripts del Proyecto

| Comando | Descripción | Uso |
|---------|-------------|-----|
| `npm start` | Inicia servidor de desarrollo | Desarrollo diario |
| `npm run build` | Compila para producción | Deploy |
| `npm run watch` | Compila en modo watch | Desarrollo con builds |
| `npm test` | Ejecuta pruebas unitarias | Testing |
| `ng serve` | Servidor Angular (alternativo) | Desarrollo |
| `ng build --prod` | Build optimizado | Producción |
| `ng generate component <name>` | Crear nuevo componente | Desarrollo |
| `ng generate service <name>` | Crear nuevo servicio | Desarrollo |

## 🔧 Dependencias Principales

### Producción
- **@angular/core**: `^18.2.0` - Framework principal
- **@angular/fire**: `^18.0.1` - SDK Angular para Firebase
- **firebase**: `^10.14.1` - SDK Firebase
- **rxjs**: `~7.8.0` - Programación reactiva
- **typescript**: `~5.5.2` - Tipado estático

### Desarrollo
- **@angular/cli**: `^18.2.21` - Herramientas CLI
- **@angular-devkit/build-angular**: `^18.2.21` - Build tools
- **karma**: `~6.4.0` - Test runner
- **jasmine**: `~5.1.0` - Testing framework

## 📝 Notas Adicionales

- La aplicación usa Firestore en tiempo real, por lo que los cambios se sincronizan automáticamente
- Los datos se almacenan en la colección `tasks` de Firestore
- Cada tarea tiene un ID único generado automáticamente por Firestore

## 🐛 Solución de Problemas Comunes

### ❌ PowerShell: "La ejecución de scripts está deshabilitada"

**Problema**: Error al ejecutar npm en Windows
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### ❌ Error: "This command is not available when running the Angular CLI outside a workspace"

**Soluciones**:
1. Verificar que estás en el directorio correcto:
   ```bash
   cd C:\Users\didac\Desktop\Node\angular-firebase-todo-app
   ```
2. Instalar Angular CLI globalmente:
   ```bash
   npm install -g @angular/cli
   ```

### ❌ Error de conexión a Firebase

**Verificaciones**:
- ✅ Configuración correcta en `src/environments/environment.ts`
- ✅ Firestore Database habilitado en Firebase Console
- ✅ Reglas de Firestore configuradas correctamente
- ✅ Conexión a internet activa

### ❌ La aplicación no carga en localhost:4200

**Pasos de solución**:
1. Verificar instalación de dependencias:
   ```bash
   npm install
   ```
2. Limpiar caché de npm:
   ```bash
   npm cache clean --force
   ```
3. Verificar versión de Node.js:
   ```bash
   node --version  # Debe ser >= 18.19.1
   ```
4. Revisar consola del navegador (F12) para errores específicos

### ❌ Puerto 4200 ya en uso

```bash
# Usar puerto diferente
ng serve --port 4300

# O liberar el puerto 4200
netstat -ano | findstr :4200
taskkill /PID <PID> /F
```

### 🔍 Verificar estado del proyecto

```bash
# Verificar archivos principales
ls angular.json package.json src/

# Verificar dependencias
npm list --depth=0

# Probar build
ng build --configuration development
```

## � Próximas Mejoras

- [ ] 🔐 **Autenticación de usuarios** con Firebase Auth
- [ ] 🎨 **Temas personalizables** (modo oscuro/claro)  
- [ ] 📱 **PWA** - Soporte offline y notificaciones push
- [ ] 🏷️ **Categorías y etiquetas** para organizar tareas
- [ ] 📅 **Fechas de vencimiento** y recordatorios
- [ ] 👥 **Colaboración** - compartir listas de tareas
- [ ] 📊 **Estadísticas avanzadas** y reportes
- [ ] 🔍 **Búsqueda y filtros** avanzados
- [ ] 📱 **App móvil** con Ionic o React Native
- [ ] 🌐 **Internacionalización** (i18n) múltiples idiomas

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres colaborar:

1. **Fork** el repositorio
2. Crea una **rama** para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** tus cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. **Push** a la rama: `git push origin feature/nueva-funcionalidad`  
5. Abre un **Pull Request**

### 📝 Guías de Contribución

- Seguir las convenciones de código existentes
- Agregar tests para nuevas funcionalidades
- Actualizar documentación cuando sea necesario
- Usar commits descriptivos siguiendo [Conventional Commits](https://www.conventionalcommits.org/)

## 📧 Contacto y Soporte

- 📧 **Email**: tu-email@example.com
- 💬 **Issues**: [GitHub Issues](link-to-issues)
- 📖 **Wiki**: [Documentación adicional](link-to-wiki)

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## ⭐ Agradecimientos

- 🔥 **Firebase Team** - Por la excelente plataforma BaaS
- 🅰️ **Angular Team** - Por el increíble framework
- 🎨 **Diseño** - Inspirado en mejores prácticas de UX/UI
- 🙏 **Comunidad** - Por las contribuciones y feedback

---

<div align="center">

**¿Te gustó el proyecto? ⭐ Dale una estrella!**

Made with ❤️ by [Tu Nombre]

</div>