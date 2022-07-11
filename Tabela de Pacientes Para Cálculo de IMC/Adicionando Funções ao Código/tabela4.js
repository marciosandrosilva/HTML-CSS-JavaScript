/* Nesta nova versão da aplicação, adicionamos uma função para realizar o cálculo do IMC
realizando a chamada para esta função e todas as partes do código que necessitam capturar
o valor do cálculo do IMC. */

var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {
    var celulaPeso = pacientes[i].querySelector('.peso')
    var peso = celulaPeso.textContent

    var celulaAltura = pacientes[i].querySelector('.altura')
    var altura = celulaAltura.textContent
    
    var celulaImc = pacientes[i].querySelector('.imc')

    var pesoValido = pesoCorreto()
    var alturaValida = alturaCorreta()

    if (!pesoValido) {
        celulaImc.innerHTML = 'Peso Inválido!'
        pacientes[i].classList.add("cor")
    }
    if (!alturaValida) {
        celulaImc.innerHTML = 'Altura Inválida'
        pacientes[i].classList.add("cor")
    }
    if (pesoValido && alturaValida) {
        var imc = calcularImc(peso, altura)
        celulaImc.textContent = imc
    }  
}

function calcularImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function pesoCorreto() {
    if (peso >= 0 && peso <= 300) {
        return true
    } else {
        return false
    }
}
function alturaCorreta() {
    if (altura >= 0 && altura <= 3.00) {
        return true
    } else {
        return false
    }
}
