// herramintas
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const {mongoose} = require('./database');  // traemos la conexión a la base de datos
app.set('port', process.env.PORT || 3000); // puerto de la aplicación si no toma el puerto 3000
app.use(morgan('dev')); // hace el segumiento de las peticiones
app.use(express.json()); // permite recibir datos en formato JSON
app.use(cors({ origin: 'http://localhost:9999' })); // permite el acceso solo desde http://localhost:9999
app.use('/servicio/productos', require('./routes/productos.routes')); // ruta para los productos
app.listen(app.get('port'), () => {
    console.log(`Servidor activo en el puerto ${app.get('port')}`);// mensaje de confirmación de que el servidor está activo
});

// fin de las herramientas

