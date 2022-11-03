const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    criaElemento(evento.target.elements['tarefa'].value, evento.target.elements['status'].value)
})

function criaElemento(tarefa, status){
    
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const statusItem = document.createElement('strong')
    novoItem.innerHTML = status

    novoItem.appendChild(statusItem)
    novoItem.innerHTML +=tarefa

    const lista = document.getElementById("lista")

    lista.appendChild(novoItem)
}
