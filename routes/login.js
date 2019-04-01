var express = require('express');
var router = express.Router();

/* log in no sistema *****************************************************************************/
router.get('/', function(req, res){
    res.render('index', {message: null});
});
router.post('/',function(req, res, next){
        var user = req.body.user;
        var password = req.body.password;

        //teste
        if(user == "ds@ds.com" && password == "123"){
            res.render('index', { snackbar: 'OK' });
        }else{
            res.render('index', { snackbar: 'E-mail e/ou senha inválidos!' });
        }
    }
);

module.exports = router;