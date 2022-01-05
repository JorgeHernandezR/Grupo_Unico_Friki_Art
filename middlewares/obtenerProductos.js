const productosDB = require("../public/javascripts/productosDB");

const obtenerProductos = function (req,res,next) {
    req.productos = productosDB.obtenerTodos();
    next();

}

module.exports = obtenerProductos;