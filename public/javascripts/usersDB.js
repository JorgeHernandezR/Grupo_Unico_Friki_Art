const fs = require("fs");
const path = require("path");


const usersDB = {
    obtenerUsuarios: function () {
        let ruta = path.resolve("data/usuarios.json");
        let usuarios = fs.readFileSync(ruta, "utf-8");
        let usuariosArray = JSON.parse(usuarios);
        return usuariosArray;
    }
}

module.exports = usersDB;