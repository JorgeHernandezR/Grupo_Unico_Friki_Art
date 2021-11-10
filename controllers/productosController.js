const controlador = {
    detalleProducto : function(req,res) {
        res.render('productos/detalleProducto');
    },
    carritoCompra: function(req,res) {
<<<<<<< HEAD
        res.render('productos/carritoCompra');
=======
        res.render('carritoCompra');
    },
    agregarProducto: function(req,res) {
        res.render('agregarProducto');
>>>>>>> 94bc4490da1767640472854012433b266a7e2b66
    }
}

module.exports = controlador;