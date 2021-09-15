var lista = []

function incrementar(){
    listaNaoOrdenada = document.querySelector('#quadro')

    itemLista = document.querySelector("#valor").value

    lista.push(document.querySelector("#valor").value)
    
    console.log(lista)

        var item = document.createElement('li')
        item.textContent = itemLista
        listaNaoOrdenada.append(item)
}

var exemplo = listaNaoOrdenada = document.querySelector('#quadro')

console.log(exemplo)

