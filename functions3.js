// function scope

//EX 01
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)

//EX 02
let subject2 = 'create video'

function createThink2() {
    subject2 = 'study'
    return subject2
}

console.log(createThink2(subject2))
console.log(subject2)

//EX 03
let subject3

function createThink3() {
    subject3 = 'study'
    return subject3
}

console.log(subject3)
console.log(createThink3())
console.log(subject3)

//EX 04
let subject4

function createThink4() {
    subject4 = 'study'
}

console.log(subject4)
console.log(createThink4())
console.log(subject4)

//EX 05
let subject5

function createThink5() {
    subject5 = 'study'
}

console.log(subject5)
createThink5()
console.log(subject5)