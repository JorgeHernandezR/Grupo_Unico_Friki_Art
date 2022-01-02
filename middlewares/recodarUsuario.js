const recordarUsuario = function (req,res,next) {

console.log("Cookies = " + req.cookies.usuario);
    if(req.cookies.usuario){
        req.session.usuario = req.cookies.usuario;
    }

    next();
}


module.exports = recordarUsuario;