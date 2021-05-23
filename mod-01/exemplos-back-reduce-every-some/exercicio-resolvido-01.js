const precos = [100, 131, 2542];

/* const ehValido = precos.every(x => {
    const ehPositivo = x >= 0;
    const ehInteiro = x % 1 === 0;

    if (ehPositivo && ehInteiro) {
        return true;
    } else { 
        return false;
    }
});

console.log(ehValido); */

// Outra forma de fazer

/* const ehValido = precos.every(x => {
    const ehPositivo = x >= 0;
    const ehInteiro = x === Math.floor(x);

    if (ehPositivo && ehInteiro) {
        return true;
    } else { 
        return false;
    }
});

console.log(ehValido); */

// Versão reduzida

const ehValido = precos.every(x => x >= 0 && x === Math.floor(x));

console.log(ehValido);