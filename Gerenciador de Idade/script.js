
var botao = document.querySelector('.botao')

botao.addEventListener('click', function() {
    var anoNascimento = document.querySelector('.ano-nascimento').value
    var anoAtual = document.querySelector('.ano-atual').value
    var resultado = document.querySelector('.resultado')

    if (anoNascimento.length == 0 || anoAtual.length == 0) {
        alert("Informe os dados acima corretamente!")

    } else if (anoNascimento > anoAtual) {
        alert("Ano de nascimento maior que o ano atual!")

    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - anoNascimento
        var genero = ""
        var periodo = ""

        if (sexo[0].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                periodo = "Criança"
            } else if (idade < 21) {
                periodo = "Jovem"
            } else if (idade < 50) {
                periodo = "Adulto"
            } else {
                periodo = "Idoso"
            }
        } else if (sexo[1].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                periodo = "Criança"
            } else if (idade < 21) {
                periodo = "Jovem"
            } else if (idade < 50) {
                periodo = "Adulto"
            } else {
                periodo = "Idoso"
            }
        }
        resultado.style.color = "blue"
        resultado.style.fontWeight = "bold"
        resultado.textContent = `Sua identificação é: ${genero} ${periodo} com ${idade} anos.`
    }
})

    

