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
    },
    actualizarProducto: function(req,res) {
        res.send('editarProducto');
    },
    eliminarProducto: function(req,res) {
        res.send('eliminar un producto');
    },

    añadirProducto: function(req,res) {
        res.render('añadirProducto');
    },
    
}

module.exports = controlador;