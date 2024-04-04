# API RESTful con Express y MySQL
Esta es una API RESTful simple creada con Node.js y MySQL que permite realizar operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar) sobre usuarios.

## Configuración del Proyecto
1. Clona el repositorio:
```
git clone https://github.com/tu-usuario/api-restful-node-mysql.git
cd api-restful-node-mysql
```
2. Instala las dependencias:
```
npm install
```
3. Configura la Base de Datos:
  - Asegúrate de tener MySQL instalado y ejecutándose.
  - Crea una base de datos llamada usersapi.
  - Ejecuta el script SQL schema.sql para crear la tabla de usuarios.

  ## Ejecutar la Aplicación
  1. Inicia la aplicación:
  ```
  npm start
  ```
  2. La aplicación estará disponible en: http://localhost:3000.

  ## Endpoints
  - `GET /users`: Obtiene todos los usuarios.
  - `POST /users`: Crea un nuevo usuario.
  - `PUT /users/:id`: Actualiza un usuario existente por su ID.
  - `DELETE /users/:id`: Elimina un usuario por su ID.

  ## Ejecutar Pruebas
  Para ejecutar las pruebas, asegúrate de tener configuradas correctamente la base de datos y la aplicación en ejecución:
  ```
  npm test
  ```