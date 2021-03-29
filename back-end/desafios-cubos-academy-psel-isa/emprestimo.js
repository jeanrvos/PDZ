// Desafio 08 - Emprestimo

function solucao(ganhos, serasaScore, mesesParaPagar) {
    //seu código aqui
    let juros = 0;
      
    if (serasaScore < 300) {
        juros = 3;
    } else if (serasaScore < 700) {
        juros = 9;
    } else {
        juros = 15;
    }
      
    const parcela = ((ganhos * 3) + (ganhos * (juros / 100))) / mesesParaPagar;
      
    console.log(parcela);
          
}