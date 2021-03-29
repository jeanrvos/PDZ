const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function () {
        let totalItens = 0;
        for ( let i = 0; i < this.produtos.length; i++) {
            totalItens += this.produtos[i].qtd;
        }
        return totalItens;
    },
    calcularTotalAPagar: function () {
        let totalAPagar = 0;        
        for ( let i = 0; i < this.produtos.length; i++) {
            totalAPagar += this.produtos[i].qtd * this.produtos[i].precoUnit; 
        }
        return (totalAPagar / 100).toFixed(2);
    },
    addProduto: function (produto) {
        let produtoExistente = false;
    
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                produtoExistente = true;
                this.produtos[i].qtd += produto.qtd;
            }        
        }    
        if (!produtoExistente) {
            this.produtos.push(produto);
        }
    },
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar())}`);
    },    
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\n`);        

        let contadorDeItens = 1;
        for (let i = this.produtos.length - 1; i >= 0; i--) {
            if (this.produtos.length > 0) {                
                console.log(`Item ${contadorDeItens} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].qtd * this.produtos[i].precoUnit / 100).toFixed(2)}`);
                contadorDeItens++;                
            }           
        }

        console.log(`\nTotal de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar())}`);
    },
    calcularDesconto: function () {
        const stringPrecos = [];

        let menorPreco = 0;

        let desconto = 0;

        if (this.calcularTotalDeItens() > 4) {
            for (let item of this.produtos) {
                stringPrecos.push(item.precoUnit);
                menorPreco = Math.min(...stringPrecos) / 100;
            } 
        }
        
        if (this.calcularTotalAPagar() > 100) {
            if (this.calcularTotalAPagar() * 0.1 > menorPreco) {
                desconto = this.calcularTotalAPagar() * 0.1;
                console.log(desconto);
            } else {
                desconto = menorPreco;
            }            
        }
        console.log(`Desconto: R$ ${desconto}`);
    }
};

carrinho.calcularDesconto();