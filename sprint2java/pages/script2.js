//criando os botoes

window.onload = function goToContato() {
    document.getElementById("botao-contato").onclick = function () {
        location.href = "http://127.0.0.1:5500/sprint2java/pages/contato.html";
    }

    document.getElementById("botao-sobrenos").onclick = function () {
    window.location.href = "http://127.0.0.1:5500/sprint2java/pages/sobrenos.html";
}
}

document.getElementById("botao-home").onclick = function () {
    location.href = "http://127.0.0.1:5500/sprint2java/index.html";
}


document.getElementById("botao-calculadora").onclick = function () {
    location.href = "http://127.0.0.1:5500/sprint2java/pages/calculadora.html";
}

document.getElementById("botao-sobrenos").onclick = function () {
    window.location.href = "http://127.0.0.1:5500/sprint2java/pages/sobrenos.html";
}

document.getElementById("botao-contato").onclick = function () {
    location.href = "http://127.0.0.1:5500/sprint2java/pages/contato.html";
}





// Função para calcular a pegada de carbono
function calcularPegadaCarbono() {
    // Obter os valores dos campos do formulário
    const consumoEnergia = parseFloat(document.getElementById('consumo-energia').value);
    const distanciaTransporte = parseFloat(document.getElementById('distancia-transporte').value);
    const consumoMaterial = parseFloat(document.getElementById('consumo-material').value);

    // Fatores de emissão (exemplo)
    const fatorEmissaoEnergia = 0.5; // exemplo: 0,5 toneladas de CO2e por unidade de energia consumida
    const fatorEmissaoTransporte = 0.1; // exemplo: 0,1 toneladas de CO2e por km percorrido
    const fatorEmissaoMaterial = 2.5; // exemplo: 2,5 toneladas de CO2e por kg de material consumido

    // Calcular as emissões de carbono
    const emissaoEnergia = consumoEnergia * fatorEmissaoEnergia;
    const emissaoTransporte = distanciaTransporte * fatorEmissaoTransporte;
    const emissaoMaterial = consumoMaterial * fatorEmissaoMaterial;

    // Calcular a pegada de carbono total
    const pegadaCarbonoTotal = emissaoEnergia + emissaoTransporte + emissaoMaterial;

    if (isNaN(pegadaCarbonoTotal)) {
        alert("Coloque um valor valido")
    } else

        // Exibir o resultado
        document.getElementById('resultado').textContent = `Sua pegada de carbono é de ${pegadaCarbonoTotal} toneladas de CO2e por ano.`;
}
    // fazendo formulario 
function validarForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    if (telefone == "") {
        alert("Por favor, digite o seu nome.");
        return false;
    }

    if (nome == "") {
        alert("Por favor, digite o seu nome.");
        return false;
    }

    if (email == "") {
        alert("Por favor, digite o seu email.");
        return false;
    }

    return true;
}



