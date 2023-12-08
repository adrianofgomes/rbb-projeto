module.exports = app => {
    const controlador = app.controladores.doadores;
  
    app.route('/api/v1/doadores')
      .get(controlador.listar)
      .post(controlador.incluir);
  
    app.route('/api/v1/doadores/:id')
      .get(controlador.recuperar)
      .delete(controlador.excluir)
      .put(controlador.atualizar);

    app.route('/api/v1/doadores/:id/transferir')
      .post(controlador.transferir)


    app.route('/api/v1/doadores/:id/depositar')
      .post(controlador.depositar)

  }