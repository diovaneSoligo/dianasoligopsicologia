var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
        var palavra_chave = req.query['palavra_chave'];
        var total = 0;
        //busca

        //retorna


    res.render('resultado_busca', { palavra_chave, total });

    }
);


module.exports = router;