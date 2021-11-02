var viewModel = {
    nombre: ko.observable('David Atehortua'),
    bandaFavorita: ko.observable('Slipknot')
};

//Activa knokout para hacer el ligado entre el viewmodel y la interfaz
ko.applyBindings(viewModel); 

