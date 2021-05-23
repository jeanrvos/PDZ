const instanciaAxios = require('../servicos/ipgeolocation');
const fs = require('fs/promises');

const postVoto = async (req, res) => {
    const { pais, ip } = req.params;
    const { body } = req; 

    try {
        const localUsuario = (await instanciaAxios.get(`?api_key=58cafbe4558f425d8e8c731e3b26fbe0&ip_address=${ip}`)).data;

        if(localUsuario.country !== pais) {
            return res.status(400).json({ "mensagem": "O IP não pertence ao país informado." });
        } else {
            const arrayVotos = JSON.parse(await fs.readFile('./votos.json'));
            const votoComputado = arrayVotos.find(voto => voto.ip === ip);

            if(!votoComputado) {
                arrayVotos.push({ "ip": ip, "voto": body.voto });
                await fs.writeFile('./votos.json', JSON.stringify(arrayVotos));
                return res.status(200).json("Voto registrado");
            }
        }
    } catch (error) {
        return res.status(400).json({ "mensagem": "O IP informado não é válido." });
    }
}; 

const buscarVotos = async (req, res) => {
    try {
        const arrayVotos = JSON.parse((await fs.readFile('./votos.json')).toString());
        res.json(arrayVotos);
    } catch (error){
        res.send('Erro');
    }
}

module.exports = {
    postVoto,
    buscarVotos
}