const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const consign    = require('consign');
var cors = require('cors')

module.exports = () => {
  const app = express();

  //Habilitando CORS (https://expressjs.com/en/resources/middleware/cors.html)
  app.use(cors())

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  // ENDPOINTS
  consign({cwd: 'api'})
    .then('data')
    .then('controladores')
    .then('rotas')
    .into(app);

  return app;
};