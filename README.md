# Evidencia 2: Creación y consumo de una API

## ✅ Objetivo
Crear una API básica con Node.js (Express) y un cliente en JavaScript que consuma la API utilizando `fetch()`.

---

## 📡 Código del API (Node.js)

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

## 💻 Código del Cliente (HTML + JS)

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

## 📷 Resultado Esperado

Al abrir el archivo `index.html` en el navegador con el servidor en ejecución, se debe mostrar:

```
¡Hola desde Express!
```

---

## 🚀 Cómo ejecutar

1. Instalar dependencias:
   ```bash
   npm install express cors
   ```

2. Iniciar el servidor:
   ```bash
   node api/index.js
   ```

3. Abrir `cliente/index.html` en un navegador.
