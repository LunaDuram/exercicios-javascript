const prompt = require('prompt-sync')()

const nota1 = 2 * parseFloat(prompt('Ensira a primeira nota: '))

const nota2 = 3 * parseFloat(prompt('Ensira a segunda nota: '))

const nota3 = 5 * parseFloat(prompt('Ensira a terceira nota: '))


const media = (nota1 + nota2 + nota3) / 10

console.log(`A média das notas é: ${media}`)