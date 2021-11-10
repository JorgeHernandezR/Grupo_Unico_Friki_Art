const controlador = {
    detalleProducto : function(req,res) {
        res.render('productos/detalleProducto');
    },
    carritoCompra: function(req,res) {
        res.render('productos/carritoCompra');
    },
    agregarProducto: function(req,res) {
        res.render('productos/agregarProducto');
    },
    editarProducto: function(req,res) {
        res.render('productos/editarProducto');
    }
}

module.exports = controlador;