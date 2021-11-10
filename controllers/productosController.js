const controlador = {
    detalleProducto : function(req,res) {
        res.render('productos/detalleProducto');
    },
    carritoCompra: function(req,res) {
        res.render('productos/carritoCompra');
    }
}

module.exports = controlador;