// 1. Declare uma variável de nome weight
    // R = let weight;
// 2. Que tipo de dado é a variável acima?
    // R = undefined
//console.log(typeof weight);
/*
    3. Declare uma variável e atribua valores para cada um dos seu dados:
        * nome: String
        * anoDeNascimento: Number (integer)
        * stars: Number (float)
        * weight: Number (integer)
        * isSubscribed: Boolean
*/
let nome, idade, stars, weight, isSubscribed
nome = 'Isaque'
anoDeNascimento = 1984
stars = 5.2
weight = 89
isSubscribed = true
console.log(nome, anoDeNascimento, stars, weight, isSubscribed)

/*
    4. A variável student abaixo é de que tipo de dado?
        R = Object
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

*/
let student = {
    nome: 'Isaque',
    anoDeNascimento: 1984,
    weight: 89,
    stars: 10.1,
    isSubscribed: true
};
console.log(typeof student)
console.log(`${student.nome} nascido no ano de ${student.anoDeNascimento} pesa ${student.weight} kg.`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
let students = []
console.log(students)

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questao 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students = [
    student
]
console.log(students)

// 7. Coloque no console o valor da posição zero do Array acima
console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students

let student2 = {
    nome: 'Arthur',
    anoDeNascimento: 2009,
    weight: 78,
    stars: 12.1,
    isSubscribed: true
};

students = [
    student,
    student2
] //ou
students[1] = student2

console.log(students)

/* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
    console.log(a)
    var a = 1

    R = underfined (Porque a variável foi declarada e atribuida valor apos pedido de impressão (console.log) pelo fato dela ser "var" que é global, ocorreu um hoisting elevando a declaração acima do pedido de impressao e deixando a atribuição de valor abaixo da impressão.
    Ex: var a
        console.log(a)
        a = 1
    )
*/

console.log(a)
var a = 1

/* 10. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.
    console.log(a)
    let b = 1

    R = Erro de referência, a declaração e atribuição de valor foi realizada apos o pedido de impressão e o tipo "let" é local e não sofre o hoisting que é a manipulacao que ocorre com o tipo "var"
*/

console.log(b)
let b = 1
