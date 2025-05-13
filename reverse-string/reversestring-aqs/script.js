function handleInput() {
    const input = document.getElementById("inputText").value;
    const result = document.getElementById("result");
    const copyBtn = document.getElementById("copyBtn");
    const clearBtn = document.getElementById("clearBtn");

    if (input.length > 3) {
        const reversed = input.split("").reverse().join("");
        result.textContent = reversed;
        copyBtn.classList.remove("d-none");
        clearBtn.classList.remove("d-none");
    } else {
        result.textContent = "";
        copyBtn.classList.add("d-none");
        clearBtn.classList.add("d-none");
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

function clearInput() {
    document.getElementById("inputText").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("copyBtn").classList.add("d-none");
    document.getElementById("clearBtn").classList.add("d-none");
}

function showToast() {
    const toastEl = document.getElementById("copyToast");
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}
