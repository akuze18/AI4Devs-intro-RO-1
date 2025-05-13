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
