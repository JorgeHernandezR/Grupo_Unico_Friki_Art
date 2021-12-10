let productosDB = require("../public/javascripts/productosDB.js");

const controlador = {
    detalleProducto : function(req,res) {
        res.render('productos/detalleProducto');
    },
    carritoCompra: function(req,res) {
        res.render('productos/carritoCompra');

        res.render('carritoCompra');
    },
    cargarVistaAgregar: function(req,res) {
        res.render('productos/agregarProducto');
    },
    cargarVistaEditar: function(req,res) {
        res.render('productos/editarProducto');
    },
    actualizarProducto: function(req,res) {
        res.send('editarProducto');
    },
    eliminarProducto: function(req,res) {
        res.send('eliminar un producto');
    },

    añadirProducto: function(req,res) {
        let productos = productosDB.obtenerTodos();
        let id = parseInt(productos[productos.length-1].id) + 1;
        let producto = {
            id: id,
            nombre: req.body.nombre,
            categoria:  req.body.categoria,
            colores: req.body.colores,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.body.imagen
        }
        productosDB.agregarProducto(producto);
        res.render("/productos/detalleProducto");
    },
    
}

module.exports = controlador;