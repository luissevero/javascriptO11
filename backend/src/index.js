const express = require('express');
const routes = require('./routes');
const cors = require('cors');

/*
**Rota e Recurso**
*/

/*
**Métodos HTTP**
GET: Buscar/Listar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

/**
 **Tipos de parâmetros
 Query Params: Parâmetros nomeados enviados na rota após o simbolo de "?" Geralmente eles servem para filtros, paginação
 Route Params: Parâmetros utilizados para identificar recursos. Exemplo: app.get('/usuarios/:id')
 Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */

 /*instalar nodemon: npm install nodemon -D(parâmetro para instalar somente em ambiente de desenvolvimento)
 BD: npm install knex, npm install sqlite3(mysql, postgresql, etc), npx knex init
     //criar arquivo de migração:  npx knex migrate:make nome_migration
     // fazer uma migração:        npx knex migrate:latest
     //desfazer a ultima migração: npx knex migrate:rollback
     //instalar modulo de segurança: npm install cors
 Driver: select * from usuarios;
 Query Builder: table('usuarios').select('*').where('etc')
 */

const app = express();

//informar a aplicação que estará sendo enviado dados no formato JSON
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);