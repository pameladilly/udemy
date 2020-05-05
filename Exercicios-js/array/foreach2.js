Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

for (i = 0; i < aprovados.length; i++) {
    console.log(`${i}) ${aprovados[i]}`)
}

aprovados.forEach2((nome, indice) => {
    console.log(`${indice + 1}) ${nome}`)

})