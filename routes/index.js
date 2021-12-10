var express = require('express');
var router = express.Router();
let productosDB = require("../public/javascripts/productosDB.js");

/* GET home page. */
router.get('/inicio', function(req, res, next) {
  let productos = productosDB.obtenerTodos();
  res.render('index',{productos: productos});
});

module.exports = router;
