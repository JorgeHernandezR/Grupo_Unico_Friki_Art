var express = require('express');
var router = express.Router();

router.get('/carritoCompra', function(req,res) {
    res.render('carritoCompra');
});

router.get('/detalle', function(req,res) {
    res.render('detalleProducto');
});

module.exports = router;