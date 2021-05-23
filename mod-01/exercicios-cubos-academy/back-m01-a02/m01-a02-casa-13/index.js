/* function circulo(raio) {
    const pi = Math.PI;

    const c = 2 * pi * raio;

    const area = pi * Math.pow(raio, 2); 

    console.log(`Considerando o raio em centímetros, o comprimento do círculo é de ${c.toFixed(2)}cm e a área é de ${area.toFixed(2)}cm²`);
    
}

circulo(3); */

const raio = 3

const c = 2 * Math.PI * raio;

const area = Math.PI * Math.pow(raio, 2);

console.log(`Considerando o raio em centímetros, o comprimento do círculo é de ${c.toFixed(2)}cm e a área é de ${area.toFixed(2)}cm²`);
