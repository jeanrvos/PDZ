const numeros =[2, 3, 5];

/* const resultado = numeros.some(x => {
    const raiz = Math.sqrt(x);
    
    if (raiz >= 0 && raiz % 1 === 0) {
        return true;
    } else {
        return false;
    }
});

console.log(resultado); */

// Outra forma de fazer

const resultado = numeros.some(x => Math.sqrt(x) >= 0 && Math.sqrt(x) % 1 === 0);

console.log(resultado);

