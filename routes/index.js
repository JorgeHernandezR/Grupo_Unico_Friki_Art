var express = require('express');
var router = express.Router();
let productosDB = require("../public/javascripts/productosDB.js");
const obtenerProductos = require("../middlewares/obtenerProductos");


/* GET home page. */
router.get('/inicio',obtenerProductos,function(req, res, next) {
  console.log("Productos del index: "+req.productos);
  res.render('index',{productos: req.productos});
});

module.exports = router;
