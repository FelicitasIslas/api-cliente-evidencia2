# Felicitas Islas Vigueras - 1123150051
# Materia: 6D Aplicaciones Web Orientadas a Servicios
# Maestro: Enrique Mascote
# Actividad: Evidencia 2: Creación y consumo de una API



Crear una API básica con Node.js (Express) y un cliente en JavaScript que consuma la API utilizando `fetch()`.

---



```javascript
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
```

---



```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cliente API</title>
</head>
<body>
    <h1>Consumo de API</h1>
    <p id="mensaje"></p>

    <script>
        fetch('http://localhost:3000/api/saludo')
            .then(response => response.json())
            .then(data => {
                document.getElementById('mensaje').innerText = data.mensaje;
            })
            .catch(error => console.error('Error:', error));
    </script>
</body>
</html>
```

---



Al abrir el archivo `index.html` en el navegador con el servidor en ejecución, se debe mostrar:

```
¡Hola desde Express!

```

