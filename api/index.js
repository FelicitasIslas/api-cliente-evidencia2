const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Hola desde Express!' });
});

app.listen(3000, () => {
    console.log('Servidor API corriendo en http://localhost:3000');
});
