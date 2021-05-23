const instanciaAxios = require('../servicos/company-enrichment');
const fs = require('fs/promises');

const buscarEmpresa = async (req, res) => {
    const { dominioEmpresa } = req.params;

    if (!dominioEmpresa) {
        res.status(400).json({ "mensagem": "Obrigatório informar o domínio para consulta." });
        return;
    }

    const arrayDominios = JSON.parse(await fs.readFile('./empresas.json'));

    const dominioCadastrado = arrayDominios.find(empresa => empresa.domain === dominioEmpresa);       

    if (dominioCadastrado) {
        res.status(200).json(dominioCadastrado);
    } else {
        try {
            const empresaConsultada = (await instanciaAxios.get(`?domain=${dominioEmpresa}`)).data;

            if(!empresaConsultada.name) {
                res.json(empresaConsultada);
                return;
            } else {      
                if(!dominioCadastrado) {
                    arrayDominios.push(empresaConsultada);
                    await fs.writeFile('./empresas.json', JSON.stringify(arrayDominios));
                }
                res.json(empresaConsultada);
                return;
            }
        } catch (error) {
            const { data, status } = error.response;
            return res.status(status).json(data);
        }        
    };
}; 

module.exports = {
    buscarEmpresa
}