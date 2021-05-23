const format = require('date-fns/format');
const ptBR = require('date-fns/locale/pt-BR');

function a(date) {
    const result = format(date, "dd 'de' MMMM 'de' yyyy", {locale: ptBR});
    console.log('letra a:', result);
}

function b(date) {
    const result = format(date, "dd/MM/yyyy");
    console.log('letra b:', result);
}

function c(date) {
    const result = format(date, "d MMM", {locale: ptBR});
    console.log('letra c:', result);
}

function d(date) {
    const result = format(date, "dd MMM yyyy", {locale: ptBR});
    console.log('letra d:', result);
}

function e(date) {
    const result = format(date, "dd 'de' MMM 'de' yyyy", {locale: ptBR});
    console.log('letra e:', result);
}

function f(date) {
    const result = format(date, "dd/MMM", {locale: ptBR});
    console.log('letra f:', result);
}

a(new Date(2020,9,5));
b(new Date(2020,9,5));
c(new Date(2020,9,5));
d(new Date(2020,9,5));
e(new Date(2020,9,5));
f(new Date(2020,9,5));