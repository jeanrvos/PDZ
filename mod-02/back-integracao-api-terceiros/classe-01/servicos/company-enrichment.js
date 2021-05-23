const axios = require('axios');

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params: {
        api_key: '9776bbc2f06f4c66b1723c18d67af7f1'
    }
});

module.exports = instanciaAxios;