module.exports = app => {
  const listaProjeto = app.data.projetos;
  const controlador = {};

  controlador.listar = (req, res) => res.status(200).json(listaProjeto);

  controlador.recuperar = (req, res) => {
    const { 
      id,
    } = req.params;
    const indice = listaProjeto.findIndex(proj => proj.id === id);

    if (indice === -1) {
      res.status(404).json({
        message: 'Projeto nao encontrado.',
        success: false
      });
      return;
    } 
    res.status(200).json({
        message: 'Projeto encontrado com sucesso!',
        success: true,
        data: listaProjeto[indice],
    });
  }

  controlador.incluir = (req, res) => {
    res.status(404).json({
        message: 'Metodo nao implementado',
        success: false
      });
  };

  controlador.excluir = (req, res) => {
      res.status(404).json({
        message: 'Metodo nao implementado',
        success: false
      });
  };

  controlador.atualizar = (req, res) => {
    res.status(404).json({
        message: 'Metodo nao implementado',
        success: false
      });
  }

  return controlador;
}