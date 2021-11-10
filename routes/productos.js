var express = require('express');
var router = express.Router();
let productosController = require('../controllers/productosController');

router.get('/carritoCompra', productosController.carritoCompra);

router.get('/detalle', productosController.detalleProducto);

router.get('/agregarProducto', productosController.agregarProducto);

module.exports = router;