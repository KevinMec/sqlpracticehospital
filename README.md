# SQL Practice Hospital 🏥

Un portafolio interactivo de SQL diseñado para demostrar habilidades técnicas en el manejo de bases de datos relacionales sin necesidad de un backend tradicional.

## 🛠 Tecnologías
- **Frontend:** React 19 + Vite
- **Motor SQL:** `sql.js` (SQLite en WebAssembly para ejecución en el navegador)
- **Editor:** `@monaco-editor/react` (Experiencia tipo VS Code)
- **Estilos:** CSS nativo con variables de diseño personalizadas

## 🏗 Arquitectura
Este proyecto utiliza una arquitectura **serverless**. La base de datos SQLite (`.sqlite`) se carga directamente en el navegador, permitiendo a los usuarios ejecutar consultas SQL en tiempo real sin riesgos de seguridad ni costos de servidor.

## 🚀 Roadmap de Desarrollo
- [x] Configuración inicial del entorno (Vite + React)
- [x] Repositorio en GitHub configurado
- [ ] Implementación de `useDatabase.js` (Conexión con SQL.js)
- [ ] Integración de Editor de código (Monaco)
- [ ] Creación de lecciones SQL didácticas
- [ ] Despliegue en Firebase Hosting

## 💻 Cómo ejecutarlo localmente
1. Clona el repositorio.
2. Instala dependencias: `npm install`
3. Inicia el servidor de desarrollo: `npm run dev`