const { default: axios } = require('axios');
const express = require('express');

const app = express();

app.get("/pokemon", async (req, res) => {

    const inicio = req.query.inicio;
    const quantidade = req.query.quantidade;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`);

    res.json(response.data.results);
});

app.get("/pokemon/:idOuNome", async (req, res) => {

    const idOuNome = req.params.idOuNome;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOuNome}`);

    res.json({
        id: response.data.id,
        name: response.data.name,
        height: response.data.height,
        weight: response.data.weight,
        base_experience: response.data.base_experience,
        forms: response.data.forms,
        abilities: response.data.abilities,
        species: response.data.species
    });
});

app.listen(8000);