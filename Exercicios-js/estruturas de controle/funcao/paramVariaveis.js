function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1, 10, 20))
console.log(soma('7.8', ' ', '1.7', ' ', 'Teste'))