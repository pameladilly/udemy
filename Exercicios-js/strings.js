let escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //retorna sempre o último, mesmo fora do index
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('d'))

console.log(escola.substring(3))
console.log(escola.substring(0, 4))
escola = 'Teste'
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))

console.log(escola.replace('Cod3r', 'Coder!'))

console.log('Ana, Maria, Pedro'.split(',')) // array