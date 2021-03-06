var express = require('express');
var router = express.Router();
let productosDB = require("../public/javascripts/productosDB.js");
const obtenerProductos = require("../middlewares/obtenerProductos");


/* GET home page. */
router.get('/inicio',obtenerProductos,function(req, res, next) {
  let usuario;
  if(req.session.usuario){
    usuario = req.session.usuario;
  }
  res.render('index',{productos: req.productos, usuario: usuario});
});

module.exports = router;
