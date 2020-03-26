//constantes e imports
const express = require('express');
const ongController = require('./controllers/OngController');
const casosController = require('./controllers/CasosController');
const perfilController = require('./controllers/PerfilController');
const sessaoController = require('./controllers/SessionController');
const routes = express.Router();


/*route params
routes.get('/usuarios/:id', (request, response) => {
    
    const params = request.params;
    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Luis Fernando Severo'
    });
});
*/
routes.post('/sessions', sessaoController.criarSessao);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.criarOng);

routes.get('/casos', casosController.index);
routes.post('/casos', casosController.criarCaso);
routes.delete('/casos/:id', casosController.delete);

routes.get('/perfil', perfilController.index);

module.exports = routes;