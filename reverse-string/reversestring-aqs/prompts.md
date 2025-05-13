# Chatbot Utilizado

Chat GPT

# Primer Prompt

Usando como base el archivo que te adjunto, Ccea una página web con lógica en javascript que invierta el orden de una cadena de texto entregada por el usuario.
Como por ejemplo, si introduzco AI4Devs devuelve sveD4AI.
Agrega algunos estilos usando bootstrap desde su CDN para que se vea presentable

# Resultado

Gracias por compartir el archivo base. A continuación, voy a crear una versión completa de la página web que incluye:

Un formulario para que el usuario ingrese una cadena de texto.

Un botón para ejecutar la inversión del texto.

Un área donde se muestra el resultado.

Lógica en JavaScript para invertir la cadena.

Estilos usando Bootstrap desde su CDN para que se vea presentable.

Archivos actualizados
✅ index.html
html
Copiar
Editar
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>
    <!-- Bootstrap CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container py-5">
        <h1 class="text-center mb-4">Reversor de Cadenas</h1>
        <div class="card shadow p-4">
            <div class="mb-3">
                <label for="inputText" class="form-label">Ingresa una cadena de texto:</label>
                <input type="text" class="form-control" id="inputText" placeholder="Ejemplo: AI4Devs">
            </div>
            <button class="btn btn-primary" onclick="reverseString()">Invertir</button>
            <div class="mt-4">
                <h5>Resultado:</h5>
                <p id="result" class="fs-5 text-success"></p>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
✅ script.js (nuevo archivo)
javascript
Copiar
Editar
function reverseString() {
    const input = document.getElementById("inputText").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("result").textContent = reversed;
}
Instrucciones
Guarda el HTML como index.html.

Crea un archivo llamado script.js en el mismo directorio y pega el código JavaScript.

Abre index.html en tu navegador para probar la funcionalidad.

¿Te gustaría que también lo empaquete todo en un archivo .zip o lo combine en un solo HTML sin archivos externos?

