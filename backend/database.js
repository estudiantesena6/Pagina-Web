const mongoose = require('mongoose');
const URI = 'mongodb+srv://estudiantesena4:81SfLLjIf77hVRRx@sitioweb.mbdugzd.mongodb.net/?retryWrites=true&w=majority&appName=SitioWeb';  // permite la conecion con mongodb atlas
mongoose.connect(URI) // conecta a la base de datos
    .then(db => console.log('Base de datos conectada')) 
    .catch(err => console.error(err)); // mensaje de error si no se puede conectar a la base de datos
    module.exports = mongoose; // exporta la conexión a la base de datos 
