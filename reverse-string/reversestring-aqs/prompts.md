# Chatbot Utilizado

Chat GPT

# Prompt 1

Usando como base el archivo que te adjunto, Ccea una página web con lógica en javascript que invierta el orden de una cadena de texto entregada por el usuario.
Como por ejemplo, si introduzco AI4Devs devuelve sveD4AI.
Agrega algunos estilos usando bootstrap desde su CDN para que se vea presentable

# Resultado 1

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

# Prompt 2

Implementa la siguiente funcionalidad a la página que recien realizaste:
El botón debe aparecer cuando haya texto suficiente, más de 3 letras

# Resultado Prompt 2

Perfecto. Para implementar esa funcionalidad, modificaremos el JavaScript para que:

Escuche los cambios en el campo de texto.

Oculte o muestre el botón según la longitud del texto ingresado (más de 3 caracteres).

También actualizaremos ligeramente el HTML para facilitar este comportamiento.

✅ index.html (actualizado)
html
Copiar
Editar
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
        <input type="text" class="form-control" id="inputText" placeholder="Ejemplo: AI4Devs" oninput="checkLength()">
      </div>
      <button class="btn btn-primary d-none" id="reverseBtn" onclick="reverseString()">Invertir</button>
      <div class="mt-4">
        <h5>Resultado:</h5>
        <p id="result" class="fs-5 text-success"></p>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
✅ script.js (actualizado)
javascript
Copiar
Editar
function reverseString() {
    const input = document.getElementById("inputText").value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("result").textContent = reversed;
}

function checkLength() {
    const input = document.getElementById("inputText").value;
    const button = document.getElementById("reverseBtn");
    
    if (input.length > 3) {
        button.classList.remove("d-none");
    } else {
        button.classList.add("d-none");
    }
}
Resultado esperado
Al escribir más de 3 caracteres, el botón "Invertir" aparecerá.

Si el texto tiene 3 caracteres o menos, el botón desaparecerá.

La cadena se invierte al hacer clic.

¿Quieres que se muestre también un mensaje si el texto no es válido, o que se bloquee el botón en lugar de ocultarlo?

# Prompt 3

Perfecto, ahora vamos a darle un poco más de fluidez, quitando el botón. Ahora que te de la cadena en tiempo real, para que no dependa del botón.
Considera además considera que la funcionalidad de los 3 caracteres no se pierda, por lo que el texto invertido solo se muestre cuando se cumpla esta condición.

# Resultado 3

Perfecto, vamos a hacer que el texto invertido se actualice en tiempo real a medida que el usuario escribe, eliminando el botón por completo. También mantendremos la condición de mostrar el resultado solo cuando el texto tenga más de 3 caracteres.

✅ index.html (actualizado sin botón)
html
Copiar
Editar
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
        <input type="text" class="form-control" id="inputText" placeholder="Ejemplo: AI4Devs" oninput="handleInput()">
      </div>
      <div class="mt-4">
        <h5>Resultado:</h5>
        <p id="result" class="fs-5 text-success"></p>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
✅ script.js (actualizado con lógica en tiempo real)
javascript
Copiar
Editar
function handleInput() {
    const input = document.getElementById("inputText").value;
    const result = document.getElementById("result");

    if (input.length > 3) {
        const reversed = input.split("").reverse().join("");
        result.textContent = reversed;
    } else {
        result.textContent = ""; // Limpiar resultado si no se cumplen los requisitos
    }
}
Comportamiento:
El resultado se actualiza en tiempo real conforme se escribe.

Solo se muestra si el texto tiene más de 3 caracteres.

No hay botón, lo que hace la experiencia más fluida y moderna.

¿Te gustaría agregar alguna animación o efecto visual cuando se actualiza el texto invertido?

