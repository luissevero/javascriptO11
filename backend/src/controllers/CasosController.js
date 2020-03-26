const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        //criar paginação
        const { pagina = 1 } = request.query;
        const [totalCasos] = await connection('casos').count();
        console.log(totalCasos);

        const casos = await connection('casos')
        .join('ongs', 'ongs.id', '=', 'casos.id_ong')
        .limit(5)
        .offset((pagina - 1) * 5)
        .select('casos.*', 'ongs.nome', 'ongs.email', 'ongs.whatsapp', 'ongs.cidade', 'ongs.uf');
        
        response.header('X-Total-Count', totalCasos['count(*)']);
        return response.json(casos);
    },

    async delete(request, response){
        const {id} = request.params;
        const id_ong = request.headers.authorization;
        
        const caso = await connection('casos')
        .where('id', id)
        .select('id_ong')
        .first();
        
        if(caso.id_ong != id_ong){
            return response.status(401).json({erro: 'Operação não permitida'});
        }

        await connection('casos').where('id', id).delete();
        return response.status(204).send();
    },

    async criarCaso(request, response){
        const { titulo, descricao, valor} = request.body;
        const id_ong = request.headers.authorization;

        const [id] = await connection('casos').insert({
            titulo,
            descricao,
            valor,
            id_ong,
        });

        return response.json({id});
    },
};