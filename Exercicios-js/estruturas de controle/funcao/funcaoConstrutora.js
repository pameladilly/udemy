function Carro(veloridadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //método público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= veloridadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = veloridadeMaxima
        }
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)