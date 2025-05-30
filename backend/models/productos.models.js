const mongoose = require('mongoose');
const { Schema } = mongoose; // importa el esquema de mongoose
const productoSchema = new Schema({ // define el esquema del producto
    nombre: {
         type: String, 
         required: true 
        }, // nombre del producto, requerido
    precio: {
         type: Number,
         required: true 
        }, // precio del producto, requerido
    descripcion: {
         type: String, 
         required: true 
        }, // descripción del producto, requerido
    cantidad: {
         type: Number,
         required: true
        }, // cantidad de productos en stock, requerido
});
module.exports = mongoose.model('Productos', productoSchema); // exporta el modelo de producto basado en el esquema definido