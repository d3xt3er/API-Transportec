var pagseguro = require('pagseguro');

var pag = new pagseguro({
                email : 'paulo27alt@gmail.com',
                token: 'B72F96990D4C43D5800E079B5A74C144',
                mode: 'sandbox'
            });

//Configurando a moeda e a referência do pedido
pag.currency('BRL');
pag.reference('12345');

//exportar a configuração do pagseguro
module.exports = pag;