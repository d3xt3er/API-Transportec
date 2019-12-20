const app = require('../app');

const port = normalizaPort(process.env.PORT || '8080');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

app.listen(port, function () {
    console.log(`Servidor TransporTec na porta ${port}`)
})