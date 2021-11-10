const controlador = {
    login: function(req, res, next) {
        res.render('login');
      },
      registro: function(req, res, next) {
        res.render('formatoRegistro');
      }
}

module.exports = controlador;