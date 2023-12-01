module.exports = app => {
    const controlador = app.controladores.usuarios;
  
    app.route('/api/v1/usuarios')
      .get(controlador.listar)
      .post(controlador.incluir);
  
    app.route('/api/v1/usuarios/:id')
      .get(controlador.recuperar)
      .delete(controlador.excluir)
      .put(controlador.atualizar);

      app.route('/api/v1/usuarios/:id/transferir')
      .post(controlador.transferir)
  }