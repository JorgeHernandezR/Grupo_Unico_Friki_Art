var express = require('express');
var router = express.Router();
let productosController = require('../controllers/productosController');

router.get('/carritoCompra', productosController.carritoCompra); 

router.get('/detalle/:id', productosController.detalleProducto);

router.get('/agregarProducto', productosController.agregarProducto);

router.get('/editarProducto', productosController.editarProducto);

router.post('/',productosController.añadirProducto);

router.get('/:id/editar',productosController.editarProducto);

router.put('/:id', productosController.actualizarProducto);

router.delete("/:id", productosController.eliminarProducto);

module.exports = router;