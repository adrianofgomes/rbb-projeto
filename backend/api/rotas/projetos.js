module.exports = app => {
    const controlador = app.controladores.projetos;
  
    app.route('/api/v1/projetos')
      .get(controlador.listar)
      .post(controlador.incluir);
  
    app.route('/api/v1/projetos/:id')
      .get(controlador.recuperar)
      .delete(controlador.excluir)
      .put(controlador.atualizar);
  }