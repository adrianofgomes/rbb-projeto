var Usuario = require("../modelos/usuario")
var controladorBlockchain = require("../blockchain/servico-blockchain")

module.exports = app => {
    const listaUsuario = app.data.usuarios;
    const controlador = {};

    controlador.listar = async (req, res) => 
    {
        const usuarios = [];
        for (usu of listaUsuario)
        {
          const saldo = await controladorBlockchain.recuperarSaldoUsuario(usu.id);
          usuarios.push(new Usuario(usu.id, usu.nome, saldo));
        }
        res.status(200).json(usuarios)
    }
  
    controlador.recuperar = async (req, res) => {
      const { id } = req.params;

      const indice = listaUsuario.findIndex(usu => usu.id === id);
  
      if (indice === -1) {
        res.status(404).json({message: 'Projeto nao encontrado.',success: false});
        return;
      } 

      const usuarioRecuperado = listaUsuario[indice];
      const saldo = await controladorBlockchain.recuperarSaldoUsuario(usuarioRecuperado.id);
      const usuario = new Usuario(usuarioRecuperado.id, usuarioRecuperado.nome, saldo);
  
      res.status(200).json({message: 'Usuario encontrado com sucesso!',success: true,data: usuario,});
    }

    controlador.transferir = (req, res) => {

        const { id } = req.params;

        const idProjeto = req.body.idProjeto;
        const qntdTokens = req.body.qntdTokens;

        controladorBlockchain.transferir(idProjeto, id, qntdTokens);

        res.status(200).json({message: `Usuario ${id} transferiu ${qntdTokens} tokens para o projeto ${idProjeto}`,success: true,data: {},});

    }
  
    controlador.incluir = (req, res) => {res.status(404).json({message: 'Metodo nao implementado',success: false});};
  
    controlador.excluir = (req, res) => {res.status(404).json({message: 'Metodo nao implementado',success: false});};
  
    controlador.atualizar = (req, res) => {res.status(404).json({message: 'Metodo nao implementado',success: false});}
  
    return controlador;
  }