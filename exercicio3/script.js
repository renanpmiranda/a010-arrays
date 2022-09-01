const arrayNumeros = [7, 12, 94, 28, 33, 40]
const arrayString = ['faixa', 'preta', 'kimono', 'dourado']
const arrayMix = [55, 21, 'lista', 'elemento', true, false]

const arrayNumerosCopia = arrayNumeros.slice()
const arrayStringCopia = arrayString.slice()
const arrayMixCopia = arrayMix.slice()

arrayNumerosCopia.push(75)
console.log(arrayNumeros, arrayNumerosCopia)

arrayStringCopia.pop()
console.log(arrayString, arrayStringCopia)

arrayMixCopia.splice(1,1)
console.log(arrayMix, arrayMixCopia)
