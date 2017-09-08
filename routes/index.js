var express = require('express');
var router = express.Router();
var usuario = [];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GitHelp', comandos: comandos, servidor: ''});
});

router.post('/', function(req, res, next) {
  var servidor = req.body.servidor; 
  if(servidor === 'commit'){
    
    for(var i=0; i<help.length; i++) {
    if(comandos[i].nome === 'commit') {
        usuario = comandos[i];
    }
    }
  }else{
    usuario = '';
  }
  res.render('index', { title: 'Git Help', usuario: usuario, servidor: servidor});
});

module.exports = router;
