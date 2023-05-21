
document.getElementById("botao-calculadora").onclick = function () {
    location.href = "http://127.0.0.1:5500/sprint2java/pages/calculadora.html";
}

document.getElementById("botao-sobrenos").onclick = function () {
    location.href = "http://127.0.0.1:5500/sprint2java/pages/sobrenos.html";
}

document.getElementById("botao-home").onclick = function () {
    location.href = "http://127.0.0.1:5500/sprint2java/index.html";
}


// fazendo formulario 
function validarForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if (nome == "") {
        alert("Por favor, digite o seu nome.");
        return false;
    }

    if (telefone == "") {
        alert("Por favor, digite o seu telefone.");
        return false;
    }

    if (email == "") {
        alert("Por favor, digite o seu email.");
        return false;
    }

    return true;
}