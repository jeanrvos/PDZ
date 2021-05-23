/* const temIngresso = true;
const censura = 16;
const idade = 18;
const estaComOsPais = false


if (temIngresso && idade >= censura || estaComOsPais) {
    console.log("Pode assistir o filme");
} else {
    console.log("Idade não permite assistir o filme");
} */


// quando a variável é booleana, pode usar o nome da variável sem o ===

/* if (temIngresso === true) {
    if (idade >= censura) {
        console.log ("pode entrar");
    } else {
        console.log ("barrado pela idade");
    }
} else {
    console.log ("barrado porque não tem ingresso");
} */

/* in (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar");
    } else {
        console.log("Barrado pela idade");
    }
} else {
    console.log("Não tem ingresso");
} */


/* // Para não usar um if vazio, pode usar o "not" que é o !.

if(!temIngresso) {
    console.log("Não tem ingresso");
} */


// ternário

/* const saldo = 1;

if (saldo === 1) {
    console.log(`Ele tem ${saldo} real`);
} else {
    console.log(`Ele tem ${saldo} reais`);
} */

const saldo = 1;

const unidade = saldo === 1 ? "real" : "reais";

console.log(`Ele tem ${saldo} ${unidade}`);