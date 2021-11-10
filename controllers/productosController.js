const controlador = {
    detalleProducto : function(req,res) {
        res.render('productos/detalleProducto');
    },
    carritoCompra: function(req,res) {
        res.render('productos/carritoCompra');

        res.render('carritoCompra');
    },
    agregarProducto: function(req,res) {
        res.render('agregarProducto');
    },
    editarProducto: function(req,res) {
        res.render('editarProducto');

    }
}

module.exports = controlador;