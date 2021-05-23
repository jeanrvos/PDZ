const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (i = 0; i < arrayA.length; i++) {
    const numeroA = arrayA[i];
    const numeroB = arrayB[i];
    
    const menorNumero = Math.min(numeroA, numeroB);

    console.log(menorNumero);
}
