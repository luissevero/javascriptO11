const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    //query params
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async criarOng(request, response){
        const {nome, email, whatsapp, cidade, uf} = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf,
        });

        return response.json({id});
    }
};