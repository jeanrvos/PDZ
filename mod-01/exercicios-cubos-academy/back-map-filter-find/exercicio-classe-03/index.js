const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasIndexadas = frutas.map((x) => {
    return `${frutas.indexOf(x)} - ${x[0].toUpperCase() + x.substr(1).toLowerCase()}`;
});

console.log(frutasIndexadas);