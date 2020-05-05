const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const frageis =
    function(produto) {
        return (produto.fragil) ? true : false
    }

const caros =
    (produto) => produto.preco >= 500

console.log(produtos.filter(frageis).filter(caros))