const cliente = {
    nome: "Jhonny",
    idade: 30,
    produtos: [
        {
            nome: "chopp",
            precoUnitario: 7,
            quantidade: 2
        }, 
        
        {
            nome: "cuba libre",
            precoUnitario: 10,
            quantidade: 3
        },
        
        {
            nome: "água",
            precoUnitario: 5,
            quantidade: 2
        }
    ]
}

console.log(cliente.produtos[2].nome);