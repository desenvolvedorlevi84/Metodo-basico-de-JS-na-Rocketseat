// function expression
// function anonymous

//parâmetros (parameters)
const sum = function(number1, number2) {
    console.log(number1 + number2)
}

sum(2, 3) // arguments - argumentos
sum(5, 10)
sum(26, 300223)


let total = 0 // usando a palavra reservada a gente diferencia uma variavel da outra. Essa variavel "total" é diferente da variavel "total" dentro do escopo da função

const soma = function(number3, number4) {
    let total = number3 + number4 //essa variavel difere da de fora do escopo
    return total
}

let number3 = 34
let number4 = 25

console.log(`O número 3 é ${number3}`)
console.log(`O número 4 é ${number4}`)

console.log(`A soma é ${soma(number3, number4)}`) // essa impressao retorna o resultada da variavel "total" dentro da função

console.log(total) // essa impressao retorna a variavel "total" de fora do escopo da função

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + ' ' + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)