// function hoisting

// Ex: 1 - Ocorre o hoisting normalmente
sayMyName()

function sayMyName() {
    console.log('Isaque')
}

// Ex: 2 - Não ocorre o hoisting porque esta usando uma palavra reservada "const".
/*sayMyName1()

const sayMyName1 = function() {
    console.log('Isaque')
}*/

// Ex: 3 - Não ocorre o hoisting porque esta usando uma palavra reservada "var" mesmo sendo essa palavra de escopo global o codigo lê "sayMyName2" como se fosse underfined e não uma função por isso ocorre o erro.
sayMyName2()

var sayMyName2 = function() {
    console.log('Isaque')
}