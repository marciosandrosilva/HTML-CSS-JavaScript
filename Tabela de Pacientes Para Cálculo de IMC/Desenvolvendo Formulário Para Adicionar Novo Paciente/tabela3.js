var pacientes = document.querySelectorAll('.paciente')

for (var i = 0; i < pacientes.length; i++) {
    var celulaPeso = pacientes[i].querySelector('.peso')
    var celulaAltura = pacientes[i].querySelector('.altura')
    var celulaImc = pacientes[i].querySelector('.imc')

    var pesoValido = true
    var alturaValida = true

    if (celulaPeso.textContent <= 0 || celulaPeso.textContent >= 300) {
        celulaImc.innerHTML = 'Peso Inválido!'
        celulaPeso.style.backgroundColor = 'red'
        pesoValido = false
    }
    if (celulaAltura.textContent <= 0 || celulaAltura.textContent >= 3.00) {
        celulaImc.innerHTML = 'Altura Inválida'
        celulaAltura.style.backgroundColor = 'red'
        alturaValida = false
    }
    if (pesoValido && alturaValida) {
        var imc = celulaPeso.textContent / (celulaAltura.textContent * celulaAltura.textContent)
        celulaImc.textContent = imc.toFixed(2)
    }  
}