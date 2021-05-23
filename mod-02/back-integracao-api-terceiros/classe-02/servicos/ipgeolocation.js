const axios = require('axios');

const instanciaAxios = axios.create({
    baseURL: 'https://ipgeolocation.abstractapi.com/v1/'
});

module.exports = instanciaAxios;