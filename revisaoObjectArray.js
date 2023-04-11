// Object

const person = {
    name: 'Jhon',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(person)
console.log(`${person.name} tem ${person.age} anos.`)

// Array

const animals = [
    'Lion',
    'Monkey',
    'Dog',
    {
        name: 'Cat',
        age: 3
    }
]

// Acessar valores dentro do array
console.log(animals)
console.log(animals.length)
console.log(animals[0])
console.log(animals[2])
console.log(animals[3])
console.log(animals[3].name)
console.log(animals[3].age)
console.log(animals[1].name) // Nesse caso o resultado é indefinido porque é uma String e não possui propriedade ou atributo como se fosse um object.