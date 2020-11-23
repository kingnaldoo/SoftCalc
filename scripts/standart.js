var visor = document.querySelector('#viser')
var valorDoVisor = visor.value
var historico = equacao = []
let cursorPosition
var teclasVirtuais = document.querySelector('#calculator')
var listaDeBotoes = document.querySelectorAll('#keys button');
var registroHistorico = document.querySelector('#list')
let listaDeTeclas = function() {
    var a = []
    for(i of listaDeBotoes){
        if(i.innerText != ""){
            a.push(i.innerText)
        }
    }
    return a
}

visor.focus()

visor.addEventListener('keyup', (event) => {
    let tecla = event.key
    let efeito = document.getElementById(tecla)
    equacao = []

    setTimeout(() => {
        efeito.style.backgroundColor = '#8259E8'
        setTimeout(() => { efeito.style.backgroundColor = '#201B54'}, 50)
    }, 50)
    
    
    if(listaDeTeclas().indexOf(tecla) != -1 || tecla == 'Backspace'){
        valorDoVisor = visor.value
    }
    else if(tecla == '=' || tecla == 'Enter'){
        
        equacao.push(visor.value)
        visor.value = eval(valorDoVisor)
        equacao.push(visor.value)
        historico.push(JSON.parse(JSON.stringify(equacao)))

        registroHistorico.innerHTML += `<div class="history">
        <h3>${historico[historico.length-1][0]}</h3>
        <h3>${historico[historico.length-1][1]}</h3>
    </div>`
        console.log(historico)
    }
    else{
        visor.value = valorDoVisor
    }
})

visor.addEventListener('click', () => {
    cursorPosition = visor.selectionStart
    // console.log(cursorPosition)
})

teclasVirtuais.addEventListener('click', () => {
    visor.focus()
    let insereTecla = visor.value.split('')
    insereTecla.splice(cursorPosition, 0, event.target.innerText)
    visor.value = insereTecla.join('')
    visor.selectionStart = visor.selectionEnd = cursorPosition
})

var acoes = {

}



 





