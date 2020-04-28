function CriarPessoa(nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)

    }
}

const p2 = new CriarPessoa('Joaquim')
p2.falar()