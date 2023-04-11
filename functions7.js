/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const isaque = new Person("Isaque")
const arthur = new Person("Arthur")
console.log(isaque.walk())
console.log(arthur.walk())