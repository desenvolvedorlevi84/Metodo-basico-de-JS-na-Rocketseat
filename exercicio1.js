/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numerico para sistemas de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - E

*/

function getNotaFinal(notaFinal) {
  let resultNotaA = notaFinal >= 90 && notaFinal <= 100;
  let resultNotaB = notaFinal >= 80 && notaFinal < 90;
  let resultNotaC = notaFinal >= 70 && notaFinal < 80;
  let resultNotaD = notaFinal >= 60 && notaFinal < 70;
  let resultNotaE = notaFinal >= 0 && notaFinal < 60;

  if (resultNotaA) {
    notaFinal = "Nota A";
  } else if (resultNotaB) {
    notaFinal = "Nota B";
  } else if (resultNotaC) {
    notaFinal = "Nota C";
  } else if (resultNotaD) {
    notaFinal = "Nota D";
  } else if (resultNotaE) {
    notaFinal = "Nota E";
  } else {
    notaFinal = "Nota inválida";
  }

  return notaFinal
}

console.log (getNotaFinal(-1))
console.log (getNotaFinal(101))
console.log (getNotaFinal(35))
console.log (getNotaFinal(65))
console.log (getNotaFinal(72))
console.log (getNotaFinal(85))
console.log (getNotaFinal(95))
console.log (getNotaFinal(100))
console.log (getNotaFinal(0))