const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

// Sirve archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Configura las rutas de la aplicación
app.use('/', routes);

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
