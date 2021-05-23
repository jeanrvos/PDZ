function esfera(diametro) {
    const raio = diametro / 2;

    const v = 4 / 3 * Math.pow(raio, 3); 

    console.log(`O volume de uma esfera de raio ${raio} é ${v} PI`);
}

esfera(6);