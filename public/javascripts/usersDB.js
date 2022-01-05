const fs = require("fs");
const path = require("path");
let rutaUsersJson = path.resolve("data/usuarios.json");

const usersDB = {
    obtenerUsuarios: function () {       
        let usuarios = fs.readFileSync(rutaUsersJson, "utf-8");
        let usuariosArray = [];
        if(usuarios.length > 0){
             usuariosArray = JSON.parse(usuarios);
        }
        return usuariosArray;
    },
    obtenerUltimoId: function (){
        let usuarios = this.obtenerUsuarios();
        let ids = usuarios.map((usuario) => {
            return usuario.id; 
        });

        ids.sort(function (a,b) { return a-b});
        console.log(ids);
        if(ids.length<1){
            return 1;
        }else{
            return ids[ids.length-1];
        }
       
    },
    registrarUsuario: function (usuario) {
        let usuarios = this.obtenerUsuarios();
        usuarios.push(usuario);
        fs.writeFileSync(rutaUsersJson,JSON.stringify(usuarios));
    }
}

module.exports = usersDB;