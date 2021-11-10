const controlador = {
    login: function(req, res, next) {
        res.render('users/login');
      },
      registro: function(req, res, next) {
        res.render('users/formatoRegistro');
      }
}

module.exports = controlador;