document.addEventListener("DOMContentLoaded", function () {
    const verificarBotao = document.getElementById("verificar");

    verificarBotao.addEventListener("click", function () {
        const idade = parseInt(document.getElementById("idade").value);

        if (isNaN(idade)) {
            alert("Por favor, insira uma idade válida.");
        } else {
            if (idade >= 18) {
                alert("Você é maior de idade.");
            } else {
                alert("Você é menor de idade.");
            }
        }
    });
});