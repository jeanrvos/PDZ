// const { promises } = require('fs');
const fs = require('fs/promises');
const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

app.get("/enderecos/:cep", async (req, res) => {
    const cep = req.params.cep;

    if (!Number(cep)) {
        res.status(400).json({ mensagem: "O CEP deve ser um número válido e sem traço." });
        return;
    }

    
    const arrayEnderecos = JSON.parse(await fs.readFile('./enderecos.json'));
    const cepFormatado = `${cep.substr(0,5)}-${cep.substr(5)}`;
    const cepEncontrado = arrayEnderecos.find(end => end.cep === cepFormatado);

    if (cepEncontrado) {
        res.json(cepEncontrado);
        return;
    } else {
        const endViaCep = (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data;
        arrayEnderecos.push(endViaCep); 

        fs.writeFile('./enderecos.json', JSON.stringify(arrayEnderecos));

        res.json(endViaCep);
        return;
    }
});

app.listen(8000);