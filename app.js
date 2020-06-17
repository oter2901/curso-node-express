const express = require('express'); //Servicio para exponer a internet
const bodyParser = require('body-parser'); //Limpia la request y la convierte a json
const compression = require('compression'); //Comprime las respuestas de la API
const cors = require('cors'); //filtra desde donde puede recibir request el servicio
const dotenv = require('dotenv'); //Toma las variables de ambiente de una archivo .env (Las variables de cada ambiente se definen en el runtime)

dotenv.config();

const Router = require('./app/routes');

const { env } = process;
const app = express();

app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

const baseURL = `/api/${env.APP_VERSION}`;
app.use(baseURL, Router);
app.use((req, res) => {
  res
    .status(500)
    .send({ code: 'error', message: 'internal server error not handled' });
});

module.exports = app;
