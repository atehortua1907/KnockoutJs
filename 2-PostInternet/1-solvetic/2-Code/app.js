var miVistaModeloOO = function (nombre, apellido) {
  var self = this;
  self.helloWorld = "Hola Mundo!";
  self.name = nombre;
  self.apellido = apellido;
  self.getNombre = function () {
    return self.name + " " + self.apellido;
  };
};

var viewModel = new miVistaModeloOO('David', 'Atehortua');
ko.applyBindings(viewModel);
