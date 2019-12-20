const banco = require('../mysql');

// exports.get = (req, res, next) => {
//     res.status(200).send('Requisição recebida com sucesso!');
// };

// exports.getById = (req, res, next) => {
//     banco.query(`SELECT linha_intermunicipal as linha FROM onibus_intermunicipal WHERE id = ?`, [req.params.id], (err, result, body) =>{
//       if(err) res.json(err);
//       res.send(result);
//     });
// };

exports.get = (req, res, next) => {
    banco.query(`SELECT nm_nome as nome FROM onibus_intermunicipal WHERE linha_intermunicipal LIKE ?`, '%' + [req.params.linha] + '%', (err, result, body) =>{
      if(err) res.json(err);
      // let arr = [];
      // result.map((obj) => {
      //   arr.push(obj);
      // });
      res.send(result);
    })
  };

exports.post = (req, res, next) => {
  banco.query(`SELECT * FROM onibus_intermunicipal WHERE linha_intermunicipal = ?`, [req.params.linha], (err, result, body) =>{
    if(err) res.json(err);
    res.send(result);
  });
};