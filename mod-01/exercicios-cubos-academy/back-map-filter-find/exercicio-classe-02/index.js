const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const cepABuscar = 00222444;

const enderecoProcurado = enderecos.find(x => x.cep === cepABuscar);

console.log(enderecoProcurado.rua);


/* function buscarEndereco(cep) {
    const enderecos = [
        { cep: 00111222, rua: "Rua dos Artistas" },
        { cep: 00111333, rua: "Rua Augusta" },
        { cep: 00222444, rua: "Avenida Paralela" },
        { cep: 11222333, rua: "Rua Carlos Gomes" },
    ];

    const enderecoEncontrado = enderecos.find(function (valor) {
        return valor.cep == cep;
    });

    console.log(enderecoEncontrado.rua);
}

buscarEndereco(00222444); */