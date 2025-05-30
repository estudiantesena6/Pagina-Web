// Importa el modelo de productos y define un controlador para manejar las operaciones relacionadas con los productos
const Productos = require('../modelos/producto.models.js'); // seconecta al modelo de productos y lo trae
const productoCtrl = {}; // objeto que contiene los métodos para manejar los productos. {} donde va la informacion ingresada

//Define los metodos del controlador de productos
productoCtrl.getProductos = async (req, res) => { 
    const productos = await Productos.find(); // busca todos los productos en la base de datos
    res.json(productos); // devuelve los productos en formato JSON
};// esta base de codigo consulta todos los productos

// consultar en solo producto
productoCtrl.getProducto = async (req, res) => {
    const producto = await Productos.findById(req.params.id); // busca un producto por su ID
    res.json(producto); // devuelve el producto en formato JSON
};// esta base de codigo consulta un producto por su id

//crear un empleado
productoCtrl.createProducto = async (req, res) => {
    const productos = new Productos(req.body); // crea un nuevo producto con los datos enviados en el cuerpo de la solicitud
    await productos.save(); // guarda el producto en la base de datos
    res.json({
        'status': 'Producto guardado'}); // devuelve un mensaje de éxito en formato JSON
 }

 // actualizar un producto
productoCtrl.editarProducto = async (req, res) => {
    const { id } = req.params; // obtiene el ID del producto a actualizar
    const productos = {
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad
    }; // crea un objeto con los datos actualizados del producto
   await Productos.findByIdAndUpdate(id, {$set: productos}, {new: true}); // actualiza el producto en la base de datos
    res.json({
        status: 'Producto actualizado'
    }); // devuelve un mensaje de éxito en formato JSON
}

// eliminar un producto
productoCtrl.eliminarProducto = async (req, res) => {
    await Productos.findByIdAndDelete(req.params.id); // elimina un producto por su ID
    res.json({
        status: 'Producto eliminado'
    }); // devuelve un mensaje de éxito en formato JSON
}

module.exports = productoCtrl; // exporta el objeto con los métodos del controlador de productos
