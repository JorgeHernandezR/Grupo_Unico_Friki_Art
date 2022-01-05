const usersDB = require("../public/javascripts/usersDB");
const session = require("express-session");
const bcrypt = require("bcryptjs");

const controlador = {
  login: function (req, res, next) {
    res.render("users/login");
  },
  loguear: function (req, res, next) {
    let usuarios = usersDB.obtenerUsuarios();
    usuarios.forEach(usuario => {
      if (usuario.email == req.body.email && bcrypt.compareSync(req.body.password,usuario.password)){

        req.session.usuario = usuario.identificador;
        if(req.body.recordarme){
          res.cookie("usuario", usuario.identificador,{maxAge: 600000});
        }
        res.redirect("/inicio");
        
      }
    });
    res.render("users/login",{errores: {msg: "error de autenticacion"}});
  },
  registro: function (req, res, next) {
    usersDB.obtenerUltimoId();
    res.render("users/formatoRegistro");
  },
  registrarUsuario: function (req,res,next) {
    let usuario = {
      id: usersDB.obtenerUltimoId() + 1,
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.contraseña,10),
      categoria: req.body.categoria,
      imagen: req.file.filename
    }

    usersDB.registrarUsuario(usuario);
    res.render("users/login");
  }
};

module.exports = controlador;
