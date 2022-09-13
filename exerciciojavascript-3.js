const prompt = require('prompt-sync')()

const segundosTotais = parseInt(prompt('Quantos segundos durou o evento? '))

const horas = Math.trunc(segundosTotais / 3600)

const minutos = Math.trunc((segundosTotais % 3600) / 60)

const segundos = (segundosTotais % 3600) % 60

console.log(`O evento durou ${horas} horas, ${minutos} minutos e ${segundos} segundos\n`)