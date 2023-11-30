module.exports = app => {
    const listaUsuario = app.data.usuarios;
    const controller = {};
  
    controller.listar = (req, res) => res.status(200).json(listaUsuario);
  
    controller.recuperar = (req, res) => {
      const { 
        id,
      } = req.params;
      console.log(listaUsuario)
      console.log(listaUsuario.data)
      const indice = listaUsuario.data.findIndex(usu => usu.id === id);
  
      if (indice === -1) {
        res.status(404).json({
          message: 'Projeto nao encontrado.',
          success: false
        });
        return;
      } 
      res.status(200).json({
          message: 'Usuario encontrado!',
          success: true,
          data: listaUsuario.data[indice],
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