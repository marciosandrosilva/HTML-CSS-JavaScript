/* Nesta nova versão da aplicação, adicionamos funções no formulário para realizar as operações
de adicionar um novo paciente na tabela de cálculo do IMC. Abaixo, temos duas chamadas para 
duas funções que, respectivamente, capturam os valores do novo paciente informado no formulário e
cria a nova linha com suas respectivas células para que o novo paciente seja adicionado a mesma. 
Abaixo, temos as duas funções citadas anteriormente e uma função que cria uma nova célula na
linha da tabela com a sua chamada sendo feita dentro da função que cria a sua respectiva linha. */

var adicionarPaciente = document.querySelector('.botao')
adicionarPaciente.addEventListener('click', function() {
    var tabela = document.querySelector('.tabela')
    var cadastro = document.querySelector('.formulario')
    
        var paciente = adicionarNovoPaciente(cadastro)
        var MontarLinha = novaLinha(paciente)

        tabela.appendChild(MontarLinha)
        cadastro.reset()
})

function adicionarNovoPaciente(cadastro) {
    pessoa = {
        nome: cadastro.nome.value,
        peso: cadastro.peso.value,
        altura: cadastro.altura.value,
        gordura: cadastro.gordura.value,
        imc: calcularImc(cadastro.peso.value, cadastro.altura.value)
    }
    return pessoa
}

function novaCelula(classe, valor) {
    var celula = document.createElement('td')
        celula.classList.add(classe)
        celula.textContent = valor
    return celula
}

function novaLinha(cadastro) {
    var linha = document.createElement('tr')
    linha.classList.add("paciente")
        linha.appendChild(novaCelula("nome", cadastro.nome))
        linha.appendChild(novaCelula("peso", cadastro.peso))
        linha.appendChild(novaCelula("altura", cadastro.altura))
        linha.appendChild(novaCelula("gordura", cadastro.gordura))
        linha.appendChild(novaCelula("imc", cadastro.imc))
    return linha
}