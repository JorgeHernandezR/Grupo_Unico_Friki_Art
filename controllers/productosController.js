let productosDB = require("../public/javascripts/productosDB.js");

const controlador = {
    detalleProducto : function(req,res) {
        console.log("Entre a detalle");
        let producto = productosDB.obtenerProducto(req.params.id);
        res.render('productos/detalleProducto',{producto:producto});
    },
    carritoCompra: function(req,res) {
        res.render('productos/carritoCompra');

        res.render('carritoCompra');
    },
    cargarVistaCrear: function(req,res) {
        res.render('productos/agregarProducto');
    },
    cargarVistaEditar: function(req,res) {
        let producto = productosDB.obtenerProducto(req.params.id);
        res.render('productos/editarProducto',{producto:producto});
    },
    actualizarProducto: function(req,res) {
        let producto = productosDB.obtenerProducto(req.params.id);
        producto.nombre= req.body.nombre;
        producto.categoria=  req.body.categoria;
        producto.colores= req.body.colores;
        producto.descripcion= req.body.descripcion;
        producto.precio= req.body.precio;
        producto.imagen= req.body.imagen;
        productosDB.actaulizarProducto(producto);
        res.redirect('/inicio');
    },
    eliminarProducto: function(req,res) {
        let id = req.params.id;
        productosDB.eliminarProducto(id);
        let productos = productosDB.obtenerTodos();
        res.render('index',{productos: productos});
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
        console.log(producto);
        res.redirect("/inicio");
    },
    
}

module.exports = controlador;