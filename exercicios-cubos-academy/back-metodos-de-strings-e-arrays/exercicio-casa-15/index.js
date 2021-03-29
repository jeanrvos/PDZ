const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function buscarVeiculo (nomes, posicao) {
    const veiculosSelecionados = nomes.slice(posicao, posicao + 3);

    const stringVeiculosSelecionados = veiculosSelecionados.join(" - ");

    console.log(stringVeiculosSelecionados);
}

buscarVeiculo(nomes, posicao);
