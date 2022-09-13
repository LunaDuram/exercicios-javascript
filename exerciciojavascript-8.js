const prompt = require('prompt-sync')()

const custoFábrica = parseFloat(prompt('Qual é o custo de fábrica do carro? '))

const percentagemDistribuidor = custoFábrica * 0.28

const impostos = custoFábrica * 0.45

const custoTotal = custoFábrica + percentagemDistribuidor + impostos

console.log(`O custo ao consumidor do carro é: R$ ${custoTotal}`)