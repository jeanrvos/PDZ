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

let totalComanda = 0;

for (let i = 0; i < cliente.produtos.length; i++) {
    const subItem = cliente.produtos[i].precoUnitario * cliente.produtos[i].quantidade;
    
    totalComanda += subItem; 
}

console.log(`Olá, ${cliente.nome}. Esperamos que tenha se divertido e apareça mais vezes. O valor total de sua comanda é de R$ ${(totalComanda/100).toFixed(2)}.`);
