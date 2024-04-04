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
  - Ejecuta el script SQL ./databases/db.sql para crear la tabla de usuarios.


  ## Variables de entorno
  Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:
  ```
  DB_HOST='localhost'
  DB_PORT='3306'
  DB_USER=tu_usuario
  DB_PASSWORD=tu_contraseña
  DB_NAME=usersapi
  ```
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

  ## Usando Docker
  Ejecuta Docker Compose para construir y levantar los contenedores:
  ```
  docker-compose up -d
  ```
  Esto creará y ejecutará los contenedores de tu aplicación Node.js y MySQL, utilizando las variables de entorno del archivo .env.
  La aplicación estará disponible en: http://localhost:3000.