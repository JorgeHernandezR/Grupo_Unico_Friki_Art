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
<<<<<<< HEAD
    },
    editarProducto: function(req,res) {
        res.render('editarProducto');
=======
>>>>>>> 94bc4490da1767640472854012433b266a7e2b66
>>>>>>> c83c999e0d155ee252e5d94ef539b72982aee7e0
    }
}

module.exports = controlador;