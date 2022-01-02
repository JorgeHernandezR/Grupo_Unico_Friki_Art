const autenticacion = function (req,res,next) {
    console.log(req.session.usuario);
    if(req.session.usuario){
        next();
    }else{
        res.send("Debes de iniciar sesion para entrar a este sitio");
    }
}

module.exports = autenticacion;