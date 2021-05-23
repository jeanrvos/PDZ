const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido) {
    console.log(apelido);
} else if (primeiroNome && sobrenome) {
    console.log (`${primeiroNome} ${sobrenome}`);
} else {
    console.log(primeiroNome);
}