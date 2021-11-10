const controlador = {
    detalleProducto : function(req,res) {
        res.render('detalleProducto');
    },
    carritoCompra: function(req,res) {
        res.render('carritoCompra');
    }
}

module.exports = controlador;