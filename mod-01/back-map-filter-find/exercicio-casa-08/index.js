const nomes = ['Maria', 'João', 'José', 'Antonio', 'Beatriz', 'Camila', 'amanda', 'Arthur'];

const letra = "A";

const nomesComA = (letra) => {
    return nomes.filter(x => x[0].toLowerCase().indexOf(letra.toLowerCase()) > -1);    
};

console.log(nomesComA(letra));