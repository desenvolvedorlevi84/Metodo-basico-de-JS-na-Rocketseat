/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/

//let number = 1 // expression é qualque linha de codigo que resolve alguma coisa no JS

//console.log(number + 1) // operator binary

//console.log(++number) // operator unary increment
//console.log(--number) // operator unary decrement
//console.log(typeof number) operator unary tipo

//console.log(false ? 'alo' : 'nada') // operator ternary

/*
    new

    * left-hand-side expression
    * criar um novo objeto

*/

/*let name = new String('Isaque')
name.surName = 'Levi'
let age = new Number(39)
console.log(name, age)
console.log(name.surName)

let date = new Date('2023-03-22')
console.log(date)
console.log(date.__proto__)*/

/*
    Operadores unários
    typeof
    delete
*/

/* const person = {
    name: 'Isaque',
    age: 39
}
console.log(typeof "Isaque")

delete person.age

console.log(person) */



// Operadores Aritiméticos

// multiplicação *
console.log(3.2 * 5.5)

// divisão /
console.log(12/2)

// soma +
console.log(34 + 67)

// subtração -
console.log(34 - 23)

// resto da divisão %
let remainder
remainder = 11 % 9
console.log(remainder)

// incremento ++
let increment = 0
increment++
increment++
console.log(increment)
console.log(increment++)
console.log(++increment)

// decremento --
let decrement = 0
console.log(--decrement)

// exponencial **
console.log(3 ** 3)

// Grouping operator ( )

let total = 2 + 3 * 5 //sem o grouping operator
console.log(total)

let total2 = (2 + 3) * 5 //com o grouping operator
console.log(total2)

// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// == igual a
console.log(two == 1)
console.log(one == "1")

// != diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// === estritamente igual a
console.log(one === "1")
console.log(one === 1)

// !== estritamente diferente de
console.log(two !== "2")
console.log(two !== 2)

// > maior que
console.log(one > two)

// >= maior igual a
console.log(one >= 1)
console.log(two >= 1)

// < menor que
console.log(one < two)

// <= menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

// Operadores de atribuição (Assignment)

let x

// assignment
x = 1

// addition assignment
// x = x + 2
x += 2

// subtraction assignment
// x = x - 1
x -= 1

// multiplicação assignment
// x = x * 2
x *= 2

// division assignment
// x = x / 2
x /= 2

// remainder, exponetiation
// x %= 2
x **= 2

console.log(x)

// Operadores logicos (logical operators)

// - 2 valores booleanos, quando verificados,
// resultara em verdadeiro ou falso

let pao = true
let queijo = false

// AND &&
//console.log(pao && queijo)

// OR ||
//console.log(pao || queijo)

// NOT !
console.log(!pao)
console.log(!queijo)

// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1  se não valor 2
// condition ? value1 : value2

// Exemplos

// Almoço top
let lasanha = true
let suco = true
const niceBreakfast = lasanha && suco ? 'Almoço top' : 'Almoço ruim'
console.log(niceBreakfast)

// Jantar top
let pizza = false
let refri = false
const niceBreakfood = pizza || refri ? 'Jantar top' : 'Jantar ruim'
console.log(niceBreakfood)

// Maior que 18 anos
let age = 20
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

// Operador de String (String operator)

// comparison (comparação)
console.log('a' == 'a')
console.log('a' == 'b')

// concatenation (concatenação)
// Retorna a união de duas Strings
console.log('a' + 'a')

let alpha = 'alpha'
console.log(alpha + 'bet' + 's')
console.log(alpha += 'bet')

let bet = 'bet'
bet += 'fair'
console.log(bet + 2023) 

/*
    Type conversion (typecasting) vs Type coersion
*/

console.log(Number('9') + 5)

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(undefined ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(-Infinity ? 'verdadeiro' : 'falso')

/*
    Operator precedence
    Precedência de operadores

    * grouping                  ( )
    * negação e incremento      ! ++ --
    * multiplicação e divisão   * /
    * adição e subtração        + -
    * relacional                < <= > >=
    * igualdade                 == != === !==
    * AND                       &&
    * OR                        ||
    * condicional               ?:
    * assignment (atribuição)   = += -= *= %=
*/

console.log(2 + 5 * 10)
console.log((2 + 5) * 10)
console.log(3 > 2)
console.log(3 > 2 > 1) // como se fosse console.log(true > 1)
console.log(3 > 2 == 1)
console.log(true == 1)
console.log(true === 1)
console.log(false == 0)
console.log(false === 0)

console.log(3 > 2 && 2 > 1)