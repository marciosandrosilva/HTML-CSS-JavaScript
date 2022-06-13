
var botao = document.querySelector(".botao")

botao.addEventListener("click", function() {
    var hora = document.querySelector(".hora-atual")
    var mensagem = document.querySelector(".mensagem")
    var horario = 9

    if (horario >= 0 && horario <= 12) {
        hora.textContent = `Agora São ${horario} Horas.`
        mensagem.textContent = "Imagem da Manhã"
        mensagem.classList.add("cor-do-texto-manha")
        document.body.style.background = 'green'

    } else if (horario > 12 && horario <= 18) {
        hora.textContent = `Agora São ${horario} Horas.`
        mensagem.textContent = "Imagem da Tarde"
        mensagem.classList.add("cor-do-texto-tarde")
        document.body.style.background = 'orange'

    } else {
        hora.textContent = `Agora São ${horario} Horas.`
        mensagem.textContent = "Imagem da Noite"
        mensagem.classList.add("cor-do-texto-noite")
        document.body.style.background = 'grey'
    }
})
