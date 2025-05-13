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

# Prompt 4

Esta funcionando excelente, ahora agrega un botón, que igualmente debe cumplir con la condición de 3 caracteres como mínimo, este botón me permite copiar la cadena invertida al porta papeles del equipo, tal como haría la combinación de teclas control + c
Además al resultado agregale algun estilo, como un marco simple

# Resultado 4

¡Genial! Vamos a agregar dos cosas:

✅ 1. Un botón para copiar al portapapeles:
Solo se mostrará si la cadena tiene más de 3 caracteres.

Usará navigator.clipboard.writeText() para copiar el texto.

✅ 2. Estilo visual al resultado:
Un marco simple (borde) con algo de relleno y fondo suave usando clases de Bootstrap.

🔧 Actualización de index.html
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
        <p id="result" class="fs-5 text-success border rounded p-3 bg-white"></p>
        <button class="btn btn-outline-secondary mt-2 d-none" id="copyBtn" onclick="copyToClipboard()">Copiar al portapapeles</button>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
🔧 Actualización de script.js
javascript
Copiar
Editar
function handleInput() {
    const input = document.getElementById("inputText").value;
    const result = document.getElementById("result");
    const copyBtn = document.getElementById("copyBtn");

    if (input.length > 3) {
        const reversed = input.split("").reverse().join("");
        result.textContent = reversed;
        copyBtn.classList.remove("d-none");
    } else {
        result.textContent = "";
        copyBtn.classList.add("d-none");
    }
}

function copyToClipboard() {
    const text = document.getElementById("result").textContent;
    
    if (text.length > 0) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert("Texto copiado al portapapeles");
            })
            .catch(err => {
                alert("Error al copiar el texto");
                console.error(err);
            });
    }
}
Resultado:
Cuando hay más de 3 caracteres, se muestra:

El texto invertido enmarcado.

Un botón "Copiar al portapapeles".

Al hacer clic, se copia el texto y aparece una alerta de confirmación.

¿Quieres que la alerta sea un mensaje visual tipo toast o snackbar en vez de un alert() tradicional? Puedo ayudarte a agregar eso también.

# Prompt 5

Estupendo, la idea del mensaje cuando se ha copiado, me parece excelente, incluyela por favor, tambien me gustaría que pudieras darle algunos colores de fondo, ya que la presentación se ve muy blanca. Que sea una presentación elegante.

# Resultado 5

¡Perfecto! Vamos a mejorar el diseño y la experiencia del usuario:

✅ Cambios que implementaremos:
Reemplazo de alert() por un toast elegante de Bootstrap 5.

Estilo visual más elegante:

Fondo general gris claro.

Tarjeta con fondo blanco y sombra.

Colores suaves y contrastes agradables para una mejor presentación.

🧩 index.html Final (actualizado con toast y estilos)
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
  <style>
    body {
      background-color: #f0f2f5;
    }

    .card-custom {
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    #result {
      background-color: #e9f7ef;
      border-color: #a3d9b1;
      color: #2e7d32;
    }

    /* Toast position */
    #toastContainer {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1050;
    }
  </style>
</head>
<body>
  <div class="container py-5">
    <h1 class="text-center mb-4 text-primary">Reversor de Cadenas</h1>
    <div class="card card-custom p-4">
      <div class="mb-3">
        <label for="inputText" class="form-label">Ingresa una cadena de texto:</label>
        <input type="text" class="form-control" id="inputText" placeholder="Ejemplo: AI4Devs" oninput="handleInput()">
      </div>
      
      <div class="mt-4">
        <h5>Resultado:</h5>
        <p id="result" class="fs-5 border rounded p-3 d-inline-block"></p>
        <button class="btn btn-outline-success mt-2 d-none" id="copyBtn" onclick="copyToClipboard()">Copiar al portapapeles</button>
      </div>
    </div>
  </div>

  <!-- Toast -->
  <div id="toastContainer">
    <div class="toast align-items-center text-white bg-success border-0" id="copyToast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          Texto copiado al portapapeles.
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS (para toast) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
🧩 script.js actualizado
javascript
Copiar
Editar
function handleInput() {
    const input = document.getElementById("inputText").value;
    const result = document.getElementById("result");
    const copyBtn = document.getElementById("copyBtn");

    if (input.length > 3) {
        const reversed = input.split("").reverse().join("");
        result.textContent = reversed;
        copyBtn.classList.remove("d-none");
    } else {
        result.textContent = "";
        copyBtn.classList.add("d-none");
    }
}

function copyToClipboard() {
    const text = document.getElementById("result").textContent;

    if (text.length > 0) {
        navigator.clipboard.writeText(text)
            .then(() => {
                showToast();
            })
            .catch(err => {
                console.error("Error al copiar:", err);
            });
    }
}

function showToast() {
    const toastEl = document.getElementById("copyToast");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}
✅ Resultado final:
Diseño elegante y moderno.

Texto invertido con estilo visual claro y suave.

Botón "Copiar al portapapeles" aparece solo si el texto tiene más de 3 letras.

Al copiar, se muestra una notificación (toast) visual en la esquina inferior derecha.

¿Quieres que el toast desaparezca automáticamente o permanezca hasta que el usuario lo cierre? Actualmente se muestra por defecto y luego se oculta solo tras unos segundos. Puedo ajustarlo según prefieras.