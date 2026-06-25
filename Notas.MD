# Documentación del Proyecto: SQL Practice Hospital

## Descripción General

Este proyecto consiste en una aplicación web interactiva que permite ejecutar consultas SQL directamente en el navegador utilizando SQLite y WebAssembly. El objetivo es proporcionar un entorno de práctica para la gestión de bases de datos de un hospital sin necesidad de un backend tradicional.

## Pasos del Desarrollo

### 1. Configuración del Entorno

* Inicialización del proyecto con React y Vite.

* Creación de la estructura de carpetas: `src/` para el código fuente y `src/hooks/` para la lógica reutilizable.

### 2. Implementación de la Base de Datos

* Diseño del esquema relacional (Especialidades, Médicos, Pacientes, Citas).

* Creación del archivo `portfolio.sqlite` mediante DB Browser for SQLite.

* Inserción de datos de prueba (DUMMY DATA).

* Integración del archivo `.sqlite` en la carpeta `public/` del proyecto.

### 3. Desarrollo de la Lógica (Hooks)

* Creación del hook personalizado `useDatabase.js`.

* Configuración de `sql.js` y el cargador de WebAssembly (.wasm) para permitir la persistencia y ejecución de consultas en el lado del cliente.

### 4. Interfaz de Usuario

* Desarrollo de un componente funcional en `App.jsx` capaz de recibir una consulta, procesarla mediante el hook y renderizar los resultados en una tabla HTML dinámica.

## Notas sobre Solución de Problemas

* **Error al crear archivos mediante consola:** El uso de comandos echo generó texto no deseado dentro de los archivos. Solución: Limpieza manual del código en VS Code y pegado de contenido limpio.

* **Problemas de importación de `sql.js`:** La librería no era encontrada por Vite. Solución: Ejecutar `npm install sql.js` y reiniciar el servidor de desarrollo.

* **Error 500 (Caché y Duplicidad):** Código duplicado en `App.jsx` y caché antigua. Solución: Limpieza de `node_modules/.vite`, recarga forzada en navegador (Hard Reload) y unificación de componentes.

* **Error "no such table":** La web cargaba una versión antigua del archivo SQLite. Solución: Limpieza de caché del navegador y verificación de que el archivo `.sqlite` en `/public` estuviera actualizado.

* **Problema de carga con `.wasm`:** El motor SQL no encontraba el archivo `.wasm` externo. Solución: Importación directa del archivo mediante `?url` en Vite para asegurar una ruta válida.

## Estado Actual

* **Finalizado:** El sistema es capaz de realizar consultas `SELECT` a la base de datos local y mostrar resultados en tiempo real.

* **Próximos Pasos:** Implementación de un editor de texto avanzado y mejora de estilos CSS para la visualización de datos.