const banco = require('../mysql');
const crypto = require("crypto");
const pag = require('../../config/pagseguroConfig')

// exports.post = (req, res, next) => {
//     const nome = req.body.nome;
//     const email = req.body.email;
//     const senha = req.body.senha;

//     banco.query(`INSERT INTO usuario(nome,email,senha) VALUES ('${nome}','${email}','${senha}')`, (err, result, body) =>{
//       if(err) res.json(err);
//       res.send('Compra efetuada!');
//     });
//   };

  // ---> TESTE <--- \\
  // exports.get = (req, res, next) => {
  //   banco.query(`SELECT * FROM usuario`, (err, result, body) =>{
  //     if(err) res.json(err);
  //     res.send(result);
  //   });
  // };

  exports.get = (req, res, next) => {

    // const nome = req.body.nome;
    // const email = req.body.email;
    // const senha = req.body.senha;

  banco.query(`SELECT * FROM usuario WHERE nome = ? AND senha = ?`,[req.params.nome, req.params.senha],(err, result, body) =>{
      if(err)res.json(err);
      console.log(result);
      if(result.length <= 0){
        console.log(result);
        res.send('usuario inexistente');
      }
      if(result.length > 0)
      {
        res.send('usuario existente');
      }
    });
  };


exports.postPayment = (req, res) => {

  const nome = req.body.nome;
  const email = req.body.email;
  const senha = req.body.senha;

  banco.query(`INSERT INTO usuario(nome,email,senha) VALUES ('${nome}','${email}','${senha}')`, (err, result, body) =>{
    if(err) res.json(err);
    // res.send('Compra efetuada!');
  });
        //Configurando as informações do comprador
        pag.buyer({
          name: nome,
          email: email,
      });

        pag.addItem({
          id: 1,
          description: 'Acesso as sessões pagas do aplicativo',
          amount: "1.99",
          quantity: 1
      });

        //Enviando o xml ao pagseguro
        pag.send(function(err, res) {
            if (err) {
                console.log(err);
            }
            console.log('Comprado!');
        });

    // res.send({ sucesso: true });
};
