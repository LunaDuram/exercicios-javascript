const prompt = require ('prompt-sync')()

const A = parseInt(prompt('Diga qual é o valor A: '))

const B = parseInt(prompt('Diga qual é o valor de B: '))

const C = parseInt(prompt('Diga qual é o valor de C: '))

const R = Math.pow (A + B, 2)

const S = Math.pow (B + C, 2)

const D = (R + S) / 2

console. log(`O valor de D é: ${D}`)