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
