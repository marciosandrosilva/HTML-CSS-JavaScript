var numero = document.querySelector('.numero')
var lista = document.querySelector('.lista')
var resultado = document.querySelector('.resultado')
var itens = []

function ehNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}
function naLista(n, l) {
    if (l.indexOf(n) == -1) {
        return true
    } else {
        return false
    }

}
function adicionar() {
    if (ehNumero(numero.value) && naLista(numero.value, itens)) {
        itens.push(numero.value)
        var valores = document.createElement('option')
        valores.textContent = `O Número ${numero.value} foi Adicionado.`
        lista.appendChild(valores)
        numero.value = ''
        numero.focus()
        resultado.textContent = ''

    } else {
        alert('Número Inválido ou já Encontrado na Lista')
    }
}
numero.value = ''
numero.focus()
//---------------------------------------------------------------------
function finalizar() {
    if (itens.length == 0) {
        alert('Adicione Valores na Lista Antes de Finalizar!')
    } else {
        var total = itens.length

        var maior = itens[0]
        var menor = itens[0]
        var soma = 0
        var media = 0
        for (var i in itens) {
            soma += parseInt(itens[i])
            if (itens[i] > maior) {
                maior = itens[i]
            }
            if (itens[i] < menor) {
                menor = itens[i]
            }
        }
        media = soma / total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>O Total de Números Digitados é: ${total}</p>`
        resultado.innerHTML += `<p>O Maior Número Digitado Foi: ${maior}</p>`
        resultado.innerHTML += `<p>O Menor Número Digitado Foi: ${menor}</p>`
        resultado.innerHTML += `<p>A Soma dos Números Digitados é: ${soma}</p>`
        resultado.innerHTML += `<p>A Média dos Números Digitados foi: ${media}</p>`
    }
}
