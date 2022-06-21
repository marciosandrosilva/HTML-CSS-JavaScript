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

    var pesoValido = true
    var alturaValida = true

    if (peso <= 0 || peso >= 300) {
        celulaImc.innerHTML = 'Peso Inválido!'
        peso.style.backgroundColor = 'red'
        pesoValido = false
    }
    if (altura <= 0 || altura >= 3.00) {
        celulaImc.innerHTML = 'Altura Inválida'
        altura.style.backgroundColor = 'red'
        alturaValida = false
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