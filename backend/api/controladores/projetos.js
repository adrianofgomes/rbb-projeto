module.exports = app => {
  const listaProjeto = app.data.projetos;
  const controller = {};

  controller.listar = (req, res) => res.status(200).json(listaProjeto);

  controller.recuperar = (req, res) => {
    const { 
      id,
    } = req.params;
    const indice = listaProjeto.data.findIndex(proj => proj.id === id);

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
        data: listaProjeto.data[indice],
    });
  }

  controller.incluir = (req, res) => {
    res.status(404).json({
        message: 'Metodo nao implementado',
        success: false
      });
  };

  controller.excluir = (req, res) => {
      res.status(404).json({
        message: 'Metodo nao implementado',
        success: false
      });
  };

  controller.atualizar = (req, res) => {
    res.status(404).json({
        message: 'Metodo nao implementado',
        success: false
      });
  }

  return controller;
}