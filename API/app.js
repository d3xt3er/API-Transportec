const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

//Rotas
const index = require('./src/routes/index');
const onibusRoute = require('./src/routes/onibusRoute');
const pagamentoRoute = require('./src/routes/pagamentoRoute');
const seletivoRoute = require('./src/routes/seletivoRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);

app.use(cors());
app.use('/onibus', onibusRoute);
app.use('/seletivo', seletivoRoute);
app.use('/pagamento', pagamentoRoute);

module.exports = app;
// module.exports = passport;