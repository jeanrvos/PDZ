const cliente = {
    nome: "Jhonny",
    idade: 30,
    produtos: [
        {
            nome: "chopp",
            precoUnitario: 700,
            quantidade: 2
        }, 
        
        {
            nome: "cuba libre",
            precoUnitario: 1000,
            quantidade: 3
        },
        
        {
            nome: "água",
            precoUnitario: 500,
            quantidade: 2
        }
    ]
}

console.log(cliente.nome);

console.log(cliente.idade);

cliente.idade = 24;

console.log(cliente.idade);

console.log(cliente.produtos[0].nome);

console.log(cliente.produtos[cliente.produtos.length-1].precoUnitario);