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
