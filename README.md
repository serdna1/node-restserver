# WebServer + RestServer

Se debe de ejecutar ```npm install``` para reconstruir los módulos de Node.

Esta API contiene las siguientes colecciones: Usuarios, Roles, Productos y Categorías. Se pueden ver las posibles requests en [esta documentación de Postman](https://documenter.getpostman.com/view/3338760/UUy4e6B1).

Los datos se guardan en un servidor de MongoDB, usando la librería mongoose para realizar los cambios en la base de datos. Los campos "img" de los modelos "Producto" y "Usuario" no contienen imágenes sino enlaces a estas, almacenadas en un servidor de cloudinary.

Los usuarios se pueden registrar a través de google si lo desean. Por otro lado, dependiendo del rol de estos, podrán realizar unas acciones u otras (solo los usuarios con rol "ADMIN_ROLE" o "VENTAS_ROL" pueden borrar un usuario).