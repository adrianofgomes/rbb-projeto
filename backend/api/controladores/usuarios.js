module.exports = app => {
    const listaUsuario = app.data.usuarios;
    const controlador = {};
  
    controlador.listar = (req, res) => res.status(200).json(listaUsuario);
  
    controlador.recuperar = (req, res) => {
      const { 
        id,
      } = req.params;
      console.log(listaUsuario)
      console.log(listaUsuario)
      const indice = listaUsuario.findIndex(usu => usu.id === id);
  
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
          data: listaUsuario[indice],
      });
    }

    controlador.transferir = (req, res) => {

        const { id } = req.params;

        const idProjeto = req.body.idProjeto;
        const qntdTokens = req.body.qntdTokens;

        res.status(200).json({
          message: `Usuario ${id} transferiu ${qntdTokens} tokens para o projeto ${idProjeto}`,
          success: true,
          data: {},
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