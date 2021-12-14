var express = require('express');
var router = express.Router();
let productosController = require('../controllers/productosController');

router.get('/carritoCompra', productosController.carritoCompra); 

router.get('/crearProducto', productosController.cargarVistaCrear);

router.get('/:id', productosController.detalleProducto);

router.get('/editarProducto/:id', productosController.cargarVistaEditar);

router.post('/',productosController.añadirProducto);

router.put('/:id', productosController.actualizarProducto);

router.delete("/:id", productosController.eliminarProducto);

module.exports = router;