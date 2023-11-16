// querySelector = seletor de elementos
const botaoTema = document.querySelector("#botaoTema")

// addEventListener = adiciona um evento
botaoTema.addEventListener("click", mudaTema)

function mudaTema(){
    let body = document.querySelector("body")
    let temaAtual = document.querySelector("#temaAtual")
    let imgLogo = document.querySelector("#imgLogo")

    if(botaoTema.checked){
        body.setAttribute('data-bs-theme','dark')
        imgLogo.setAttribute('src','images/logo/logoWhite.svg')
        temaAtual.innerHTML = "Escuro"
    }else{
        body.setAttribute('data-bs-theme','light')
        imgLogo.setAttribute('src','images/logo/logoDark.svg')
        temaAtual.innerHTML = "Claro"
    }
}