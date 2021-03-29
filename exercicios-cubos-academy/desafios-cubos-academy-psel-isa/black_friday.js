// Desafio 06 - Black Friday

function solucao(produtos, valorMaximo, avaliacaoMinima) {
    // seu código aqui
    let listaPresentesOk = [];
            
    for (let i = 0; i < produtos.length; i++) {
        const presente = produtos[i];
        if (presente.valor > valorMaximo || presente.avaliacao < avaliacaoMinima) {
            continue;            
        } else {
            listaPresentesOk.push(presente);
        }            
    }
        
    console.log(listaPresentesOk);
      
}