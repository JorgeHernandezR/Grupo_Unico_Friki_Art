const controlador = {
    detalleProducto : function(req,res) {
        res.render('detalleProducto');
    },
    carritoCompra: function(req,res) {
        res.render('carritoCompra');
    },
    agregarProducto: function(req,res) {
        res.render('agregarProducto');
    }
}

module.exports = controlador;