var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
    var dir = req.query['dir'];

    if(dir == 'pg-torne-se_um_membro'){

        //carregar dados se existirem para a página
        res.render('tornarse_membro');

    }else if(dir == 'pg-voluntarie-se'){

        //carregar dados se existirem para a página
        res.render('voluntariese_em_projetos');

    }else if(dir == 'pg-seja_um_parceiro'){

        //carregar dados se existirem para a página
        res.render('seja_um_parceiro');

    }else if(dir == 'sn-quem_somos'){

        //carregar dados se existirem para a página
        res.render('quem_somos');

    }else if(dir == 'sn-nucleo_sm'){

        //carregar dados se existirem para a página
        res.render('nucleo_santa_maria_rs');

    }else if(dir == 'sn-projetos'){

        //carregar dados se existirem para a página
        res.render('projetos');

    }else if(dir == 'info-contato'){

        //carregar dados se existirem para a página
        res.render('contato');

    }

    res.render('index', { snackbar: 'Link não encontrado, retono automático à página inicial!' });

    }
);

module.exports = router;