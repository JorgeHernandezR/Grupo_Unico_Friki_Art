var express = require('express');
var router = express.Router();
let path = require("path");
let productosController = require('../controllers/productosController');
const { check } = require("express-validator");

const validaciones = [
    check("nombre").notEmpty().withMessage("Debes de introducir un nombre de producto"),
    check("categoria").notEmpty().withMessage("Debes de seleccionar una categoria"),
    check("colores").notEmpty().withMessage("Debes de introducir un color"),
    check("descripcion").notEmpty().withMessage("Debes de introducir una descripción"),
    check("precio").notEmpty().withMessage("Debes de introducir un precio").bail()
    .isNumeric().withMessage("Debes de introducir un formato de precio valido"),
    check("imagen").custom((value, { req }) => {
        let extensionesValidas = [".jpg",".png",".jpeg"];
        if(!req.file){
            throw new Error("Debes de subir una imagen");
        }else{
            if(extensionesValidas.includes(path.extname(req.file.originalname))) {
                return true;
            }else {
                throw new Error("Extension de archivo no valida, extensiones pemritidas ${extensionesValidas.join(' ,')}");
            }
        }
    })
] 

router.get('/carritoCompra', productosController.carritoCompra); 

router.get('/crearProducto', productosController.cargarVistaCrear);

router.get('/:id', productosController.detalleProducto);

router.get('/editarProducto/:id', productosController.cargarVistaEditar);

router.post('/',validaciones,productosController.añadirProducto);

router.put('/:id',validaciones,productosController.actualizarProducto);

router.delete("/:id", productosController.eliminarProducto);

module.exports = router;