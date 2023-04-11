/*
    ### Sistema de gastos familiares

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

let financialStatement = {
incomes: [
wage = 4350,
returnOnInvestment = 1250.78,
sales = 2255.36
],

expenses: [
rent = 1250,
water = 256.44,
energy = 269.22, 
internet = 129.90,
gas = 60.00,
food = 1550.66,
school = 1950.35,
transport = 250.00,
fuel = 650
]
}

function sum (array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(financialStatement.incomes)
    const calculateExpenses = sum(financialStatement.expenses)

    const total = calculateIncomes - calculateExpenses
    const itsOk = total >= 0

    let balanceText = "negativo"

    if(itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()