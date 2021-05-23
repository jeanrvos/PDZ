/* function poligono(numeroDeLados) {
    const somaAngulosInternos = (numeroDeLados - 2) * 180; 

    const angulo = somaAngulosInternos / numeroDeLados;

    console.log(`A soma dos ângulos internos de um polígono com ${numeroDeLados} lados é igual a ${somaAngulosInternos}° e o valor de cada ângulo, considerando que todos sejam iguais é de ${angulo}°`);
}

poligono(6); */

const numeroDeLados = 6;

const somaAngulosInternos = (numeroDeLados - 2) * 180; 

const angulo = somaAngulosInternos / numeroDeLados;

console.log(`A soma dos ângulos internos de um polígono com ${numeroDeLados} lados é igual a ${somaAngulosInternos}° e o valor de cada ângulo, considerando que todos sejam iguais é de ${angulo}°`);