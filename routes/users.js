var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');


/* GET users listing. */
router.get('/login', usersController.login);

router.post('/login', usersController.loguear);

router.get('/formatoRegistro', usersController.registro);

router.post("/registrar", usersController.registrarUsuario);

module.exports = router;
