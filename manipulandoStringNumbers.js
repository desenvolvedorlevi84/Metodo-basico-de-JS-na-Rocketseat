/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
    
    O Javascript possui muitas funcionalidades prontas para uso numa cadeia de prototipos.
    Basta escrever qualquer codigo do tipo String, Number, Boolean, Array, Objeto, etc... e  executar pra conferir toda a cadeia de funções __proto__, ou acompanhada por .__proto__ para ver o tipo  do dado do codigo e as cadeias de funcionalidades, cada codigo escrito vem embrulhado em um ou mais objeto com muitas funcionalidades. 


*/

/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5) // O JS fez o Type coersion alterando o 5 que era do tipo Number para o tipo Strings "5", para evitar o erro na linha do código.

console.log(Number('9') + 5) // O programador fez de forma manual a alteração do 9 que era do tipo String para o tipo Number, nessa caso o Type conversion.




// Manipulando Strings e Numeros

// Transformar String em Numero e Numero em String
let string = "123"
console.log(Number(string)) // Caso nao quiser imprimir no console basta escrever Number(string)
let number = 321
console.log(String(number)) // Caso nao quiser imprimir no console basta escrever String(number)

// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = "Paralelepipedo"
console.log(word.length)
let numbers = 1234
console.log(String(numbers).length)

// Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula
let number1 = 345.33452345
console.log(number.toFixed(2).replace(".", ",")) // tranformou o tipo de Number para Strings automaticamente devido a alteração do ponto para virgula nas casas decimais.
console.log(Number(number.toFixed(2).replace(".", ","))) // na linguagem nao é possivel tranformar de String para Number porque nao existe na linguagem Numbers separados por ","
console.log(Number(number.toFixed(2))) // Sem a alteração de   "." por "," ele altera sem problemas do tipo String para Number.

// Transforme letras minusculas em maiusculas. Faça o contrario disso tambem
let words = "Programar é muito bacana!"
console.log(words.toLowerCase())

let words2 = "Programar é muito bacana!"
console.log(words2.toUpperCase())

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)

// Verificar se o texto contém a palavra Amor
let phrase2 = "Eu quero viver!"
console.log(phrase2.includes("Amor"))

let phrase3 = "Eu quero viver o amor!"
console.log(phrase3.includes("Amor"))

let phrase4 = "Eu quero viver o Amor!"
console.log(phrase4.includes("Amor"))
