const connection = require('../database/connection');

module.exports = {
    async criarSessao(request, response){
        const { id } = request.body;
        const ong = await connection('ongs')
        .where('id', id)
        .select('nome')
        .first();

        if(!ong){
            return response.status(400).json({erro: 'ONG não encontrada'});
        }else{
            return response.json(ong);
        }
    }
};
