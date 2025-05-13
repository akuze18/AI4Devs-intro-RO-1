# Resumen de conversación con ChatGPT

**Chatbot utilizado:** ChatGPT (OpenAI)

## Prompt 1

**Usuario:** Usando como base el archivo que te adjunto, crea una página web con lógica en javascript que invierta el orden de una cadena de texto entregada por el usuario.

**ChatGPT:** Generé una página HTML con Bootstrap y JavaScript que invierte en tiempo real una cadena ingresada por el usuario. Se muestra el resultado al presionar un botón.

## Prompt 2

**Usuario:** El botón debe aparecer cuando haya texto suficiente, más de 3 letras.

**ChatGPT:** Actualicé el código para que el botón de invertir solo aparezca si el texto ingresado tiene más de 3 caracteres.

## Prompt 3

**Usuario:** Ahora que te de la cadena en tiempo real, para que no dependa del botón. Considera además que la funcionalidad de los 3 caracteres no se pierda.

**ChatGPT:** El texto se invierte en tiempo real, sin botón. Solo se muestra el resultado cuando hay más de 3 caracteres.

## Prompt 4

**Usuario:** Agrega un botón que me permite copiar la cadena invertida al porta papeles del equipo. Además al resultado agrégale algún estilo, como un marco simple.

**ChatGPT:** Se agregó un botón que copia el texto invertido al portapapeles usando `navigator.clipboard.writeText`, visible solo si hay más de 3 caracteres. También se mejoró el estilo visual con Bootstrap.

## Prompt 5

**Usuario:** La idea del mensaje cuando se ha copiado me parece excelente, inclúyela por favor. También me gustaría que pudieras darle algunos colores de fondo, que sea una presentación elegante.

**ChatGPT:** Reemplacé el alert por un toast elegante de Bootstrap y mejoré la presentación visual general con estilos suaves, tarjetas y fondo claro.

## Prompt 6

**Usuario:** El cuadro de resultado se va adaptando según el resultado, necesito que sea del mismo largo que el input. El botón de copiado debe quedar abajo. Agrega un botón de borrado del campo de entrada.

**ChatGPT:** El resultado ahora ocupa el mismo ancho que el input. El botón de copiar está fijo debajo. Se agregó un botón de borrado visible solo cuando hay más de 3 caracteres.

## Prompt 7

**Usuario:** Para terminar, necesito que me generes un archivo con toda esta conversación, para guardarlo en el readme.md de mi proyecto. No es necesario que incluyas las líneas de código, pero sí debe indicar como primer ítem el chatbot que estoy usando, es decir tú. Y luego mis prompt (con el número correlativo) y tus respuestas.

**ChatGPT:** Compilé el resumen completo de nuestra conversación (sin los fragmentos de código) en formato markdown para que lo puedas guardar en tu README.md.
