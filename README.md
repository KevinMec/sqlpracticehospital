# SQL Practice Hospital 🏥

Un portafolio interactivo de SQL diseñado para demostrar habilidades técnicas en el manejo de bases de datos relacionales sin necesidad de un backend tradicional.

## 🛠 Tecnologías
- **Frontend:** React 19 + Vite
- **Motor SQL:** `sql.js` (SQLite ejecutándose en el navegador vía WebAssembly)
- **Editor:** React Component para visualización de tablas
- **Arquitectura:** Serverless (Carga de archivos `.sqlite` en tiempo real)

## 🏗 Estado Actual del Proyecto
- [x] Configuración inicial (React + Vite)
- [x] Conexión con `sql.js` (Hook `useDatabase.js`)
- [x] Base de datos SQLite integrada (`portfolio.sqlite`)
- [x] Interfaz de consulta inicial funcionando
- [ ] Implementación de editor SQL avanzado
- [ ] Estilos UI mejorados

## 🚀 Cómo ejecutar localmente
1. Clona el repositorio.
2. Instala dependencias: `npm install`
3. Inicia el servidor: `npm run dev`