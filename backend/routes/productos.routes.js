const express = require('express');
const router = express.Router();
const productoCtrl = require('../metodos/producto.metodos.js'); // Importa el controlador de productos
// Define las rutas para los productos
router.get('/', productoCtrl.getProductos); // Ruta para obtener todos los productos
router.get('/:id', productoCtrl.getProducto); // Ruta para obtener un producto por ID
router.post('/', productoCtrl.createProducto); // Ruta para crear un nuevo producto
router.put('/:id', productoCtrl.editarProducto); // Ruta para actualizar un producto por ID
router.delete('/:id', productoCtrl.eliminarProducto); // Ruta para eliminar un producto por ID
module.exports = router; // Exporta el router para que pueda ser utilizado en otros archivos