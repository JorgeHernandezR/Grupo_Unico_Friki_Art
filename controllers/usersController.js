const usersDB = require("../public/javascripts/usersDB");
const session = require("express-session");

const controlador = {
  login: function (req, res, next) {
    res.render("users/login");
  },
  loguear: function (req, res, next) {
    let usuarios = usersDB.obtenerUsuarios();
    usuarios.forEach(usuario => {
      if (usuario.email == req.body.email && usuario.password == req.body.password){

        req.session.usuario = usuario.identificador;
        if(req.body.recordarme){
          res.cookie("usuario", usuario.identificador,{maxAge: 600000});
        }
        res.send("Estas logueado");
        
      }
    });
    res.send("Error de autenticacion");
  },
  registro: function (req, res, next) {
    res.render("users/formatoRegistro");
  },
  registrarUsuario: function (req,res,next) {
    res.send("Usuario registrado");
  }
};

module.exports = controlador;
