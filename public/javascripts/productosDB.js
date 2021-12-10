const fs = require("fs");
const path = require("path");

const productosDB = {
    obtenerTodos: function () {
        let productos = this.leerJSON();
        let arregloProductos = JSON.parse(productos);
        return arregloProductos;
    },
    agregarProducto: function (producto) {
        let productos = this.obtenerTodos();
        productos.push(producto);
        let productosString = JSON.stringify(productos);
        let ruta = path.resolve("data/productos.json");
        fs.writeFileSync(ruta,productosString);
    },
    obtenerProducto: function () {

    },
    actaulizarProducto: function () {

    },
    eliminarProducto: function () {

    },
    leerJSON: function () {
        let ruta = path.resolve("data/productos.json");
        let productos = fs.readFileSync(ruta,"utf-8");
        return productos;
    }
}

module.exports = productosDB;