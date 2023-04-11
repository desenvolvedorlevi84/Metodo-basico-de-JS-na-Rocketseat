// if...else

let temperature = 38;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if (highTemperature) {
  console.log("Febre alta");
} else if (mediumTemperature) {
  console.log("Febre moderada");
} else {
  console.log("Saudável");
}

// switch

function calculate(number1, operator, number2) {
  let result

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;

    case "-":
      result = number1 - number2;
      break;

    case "*":
      result = number1 * number2;
      break;

    case "/":
      result = number1 / number2;
      break;

    default:
        console.log('não implementado')
      break;
  }

  return result
}
console.log(calculate(9, '+', 1))



/*
//throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário")
    }

    console.log('Depois do erro')
}

// try...catch
try {
    sayMyName()
} catch (e) {
    console.log(e)
}
*/




/*
// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário")
    }

    console.log('Depois do erro')
}

sayMyName()

// try...catch
/* try {
    sayMyName()
} catch (e) {
    console.log(e)
} */


/*
// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário")
    }

    console.log('Depois do erro')
}

sayMyName()

console.log('Após a função de erro')

// try...catch
/* try {
    sayMyName()
} catch (e) {
    console.log(e)
} */



// throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário")
    }

    console.log('Depois do erro')
}

// try...catch
try {
    sayMyName()
} catch (e) {
    console.log(e)
}

console.log('Após a função de erro')



// Uma forma de capturar o erro da aplicação é usar esse modelo, que nesse caso é criado o erro com o throw dentro da função, e no try a gente executa essa função, caso houver o erro criado é usado o catch para pegar o erro na aplicação.

// throw (lancar)

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário")
    }

    console.log(name)
}

// try...catch (tentar...pegar)
try {
    sayMyName('isaque')
} catch (e) {
    console.log(e)
}

console.log('Após ao try/catch')