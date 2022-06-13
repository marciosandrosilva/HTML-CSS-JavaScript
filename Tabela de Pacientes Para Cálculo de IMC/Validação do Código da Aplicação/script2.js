/* Nesta nova versão do aplicativo, Criamos uma estrutura 'for()' para percorrer todas 
as linhas da tabela e capturar todas as informações das respectivas linhas que correspondem 
cada paciente. Após este procedimento, uma validação foi incluída para impor condições em 
relação aos valores de peso e altura que são possíveis de serem informados na tabela. 
Tais condições estão descritas nas estruturas condicionais codificadas abaixo, onde: 
caso os valores informados na tabela sejam inválidos de acordo com a condição, o erro
será mostrado na tela através de uma mensagem, além de uma mudança de cor da respectiva 
célula onde ocorreu o erro. */

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






