/* 
Nesta versão do código, incluímos no HTML um formulário simples para adicionar-mos um novo
paciente à nossa tabela para o cálculo do IMC. O código abaixo foi dividido em 3 partes
para melhor exemplificar a instrução que cada parte do código executa:

1 - É adicionado uma variável para manipular o botão que foi desenvolvido junto com o formulálio
    e que será responsável por adicionar um novo paciente na tabela; à esta variável que foi
    atribuída ao botão, foi adicionado um evento de "cliquar no botão" para executar a função
    atribuída a este evento; no escopo desta função, são criados 2 elementos: uma <tr> e cinco <td>,
    com cada elemento atribuído a uma variável e, após a criação dos mesmos, utilizamos estas
    variáveis pra adicionar o elemento filho, a <td> dentro do elemento pai, a <tr>.

2 - Na segunda parte do código, iremos trabalhar com os novos valores que serão adicionados pelo
    usuário da aplicação. primeiro, criamos uma variável responsável por "trazer" o formulário
    do HTML para o javaScript; depois utilizaremos esta variável para ler os valores de cada <td>
    que será informado pelo usuário e atribuir cada valor a uma nova variável; após este procedimento,
    iremos imprimir o valor destas variáveis em cada célula da nova linha que foi criada anteriormente.

3 - Na terceira e última parte do código, criamos uma variável que irá "trazer" a tabela do HTML 
    para o JavaScript e utilizaremos esta variável para adicionar o elemento filho <tr> ao elemento
    pai <table> para que a nova linha seja criada na tabela, adicionando assim um novo paciente a mesma.      
*/
//---------------------------- 1 -----------------------------------
var adicionarPaciente = document.querySelector('.botao')

adicionarPaciente.addEventListener('click', function() {
    
    var novoPaciente = document.createElement('tr')

    var novoNome = document.createElement('td')
    var novoPeso = document.createElement('td')
    var novaAltura = document.createElement('td')
    var novaGordura = document.createElement('td')
    var novoImc = document.createElement('td')

        novoPaciente.appendChild(novoNome)
        novoPaciente.appendChild(novoPeso)
        novoPaciente.appendChild(novaAltura)
        novoPaciente.appendChild(novaGordura)
        novoPaciente.appendChild(novoImc)

//---------------------------- 2 -----------------------------------
    var cadastro = document.querySelector('.formulario')

    var nome = cadastro.nome.value
    var peso = cadastro.peso.value
    var altura = cadastro.altura.value
    var gordura = cadastro.gordura.value

        novoNome.textContent = nome
        novoPeso.textContent = peso
        novaAltura.textContent = altura
        novaGordura.textContent = gordura


//--------------------------- 3 ------------------------------------
    var tabela = document.querySelector('.tabela')
    
    tabela.appendChild(novoPaciente)
})