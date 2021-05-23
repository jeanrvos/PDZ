const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function buscarPosicaoDoLivro (livros, nomeDoLivro) {
    const posicaoDoLivro = livros.indexOf(nomeDoLivro);
    console.log(posicaoDoLivro + 1);
}

buscarPosicaoDoLivro(livros, nomeDoLivro);
