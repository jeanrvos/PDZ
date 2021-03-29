function cilindro(raio, altura) {
    const pi = Math.PI;

   /*  const areaBase = pi * Math.pow(raio, 2);
    const areaLateral = 2 * pi * raio * altura;

    const areaTotal = 2 * areaBase + areaLateral; */

    const areaTotal = 2 * pi * raio * (raio + altura);

    console.log(`Considerando um cilindro com um raio de ${raio}cm e uma altura de ${altura}cm, a área total do cilindro é de aproximadamente ${areaTotal.toFixed(2)}cm².`);

}

cilindro(4, 12);

