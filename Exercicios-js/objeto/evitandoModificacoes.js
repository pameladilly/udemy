const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }

}

console.log(JSON.stringify(obj))
console.log(produto)

//Object.seal
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes