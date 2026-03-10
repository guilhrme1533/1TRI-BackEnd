//               0           1           2            3        4          5          6          7
const carros = ["Vectra", "HB20s", "Jetta", "Golfe GTI", "S10", "Corsa", "Gol", "Mobi"]
const valores = [90000    ,     80000      ,     250000     ,    500000  ,   74000  ,    26000   ,    29000   ,   50000   ]

function mostrarModelos(){
    let contador = 0
    while(contador < carros.length){
        console.log(carros[contador] + " - R$ " + valores[contador])
        contador = contador + 1
    }
    console.log("------------------------------") // separador mais limpo
}

// Adicionar novos elementos na lista
function novoProduto(carro, valor){
    carros.push(carro)
    valores.push(valor)
}

// Remover pelo índice
function deletarProduto(indice){
    carros.splice(indice, 1)
    valores.splice(indice, 1)
}

// Execução na ordem pedida
mostrarModelos()
novoProduto("Jetta", 250000)
mostrarModelos()
deletarProduto(1) // remove HB20s
mostrarModelos()
