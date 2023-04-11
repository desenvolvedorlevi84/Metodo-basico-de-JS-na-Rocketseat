// Estrutura de repetição


// for
// break - para a execução do loop
// continue - pula a execução do momento

/*
for(let i = 0; i < 10; i++) {
    console.log(i)
}
*/

/*
for(let i = 1; i <= 10; i++) {
    console.log(i)
}
*/

/*
for(let i = 10; i > 0; i--) {
    console.log(i)
}
*/

/*
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        break;
    }   

    console.log(i)
}
*/

/*
for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }   

    console.log(i)
}
*/

// while

/*
let i = 0;
while(i < 10) {
    console.log(i)

    i++;
}
*/

/*
let i = 1000000000000;
while(i > 10) {
    console.log(i)

    i /= 20
}
*/

// for...of

/*
let name = 'Isaque'
let names = ['Queze', 'Arthur', 'Heitor']

for(let char of name) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}
*/

// for...in

let person = {
    name: 'Mary',
    age: 35,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}