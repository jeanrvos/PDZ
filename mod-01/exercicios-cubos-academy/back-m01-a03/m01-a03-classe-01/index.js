const jogada1 = "pedra"
const jogada2 = "pedra"

let vencedor;

//seu código aqui

if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "pedra") {
    
    vencedor = jogada1;

    console.log(vencedor);

} else if (jogada2 === "pedra" && jogada1 === "tesoura" || jogada2 === "tesoura" && jogada1 === "papel" || jogada2 === "papel" && jogada1 === "pedra") {

    vencedor = jogada2
    console.log(vencedor);

} else {
    console.log('empate');
}