// Manipulando Arrays 2

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar no começo
techs.unshift("sql")

// remover do fim
//techs.pop() // cada vez que rodar essa função vai eliminando o ultimo do array

// remover do começo
//techs.shift()

// pegar somente alguns elementos do array
//console.log(techs.slice(1, 2))

// remover 1 ou mais items em qualquer posição do array
//techs.splice(2, 2)

// encontrar a posição de um elemento no array
let index = techs.indexOf('sql')
techs.splice(index, 2)

console.log(techs)
//console.log(index)