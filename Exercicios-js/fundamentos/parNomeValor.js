//par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaaa' //contexto léxico 2
    return saudacao
}

const cliente = {
    nome: 'Pedro',
    idade: 32,
    pes: 90,
    endereco: {
        lagradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)