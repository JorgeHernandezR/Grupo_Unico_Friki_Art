var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/formatoRegistro', function(req, res, next) {
  res.render('formatoRegistro');
});

module.exports = router;
