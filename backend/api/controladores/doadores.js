var Doador = require("../modelos/doador")
var controladorBlockchain = require("../blockchain/servico-blockchain")

module.exports = app => {
    const listaDoadores = app.data.doadores;
    const controlador = {};

    controlador.listar = async (req, res) => 
    {
        const doadores = [];
        for (doador of listaDoadores)
        {
          const saldo = await controladorBlockchain.recuperarSaldoDoador(doador.id);
          console.log(saldo);
          doadores.push(new Doador(doador.id, doador.nome, saldo));
        }
        res.status(200).json(doadores)
    }
  
    controlador.recuperar = async (req, res) => {
      const { id } = req.params;

      const indice = listaDoadores.findIndex(doador => doador.id === id);
  
      if (indice === -1) {
        res.status(404).json({message: 'Projeto nao encontrado.',success: false});
        return;
      } 

      const doadorRecuperado = listaDoadores[indice];
      const saldo = await controladorBlockchain.recuperarSaldoDoador(doadorRecuperado.id);
      const doador = new Doador(doadorRecuperado.id, doadorRecuperado.nome, saldo);
  
      res.status(200).json({message: 'Doador encontrado com sucesso!',success: true,data: doador});
    }

    controlador.transferir = (req, res) => {

        const { id } = req.params;

        const idProjeto = req.body.idProjeto;
        const qntdTokens = req.body.qntdTokens;

        controladorBlockchain.transferir(idProjeto, id, qntdTokens);

        res.status(200).json({message: `Doador ${id} transferiu ${qntdTokens} tokens para o projeto ${idProjeto}`,success: true,data: {},});

    }

    controlador.depositar = (req, res) => {

      const { id } = req.params;

      const valor = req.body.valor;

      controladorBlockchain.depositar(id, valor);

      res.status(200).json({message: `Doador ${id} depositou ${valor}`,success: true,data: {},});
    }

  
    controlador.incluir = (req, res) => {res.status(404).json({message: 'Metodo nao implementado',success: false});};
  
    controlador.excluir = (req, res) => {res.status(404).json({message: 'Metodo nao implementado',success: false});};
  
    controlador.atualizar = (req, res) => {res.status(404).json({message: 'Metodo nao implementado',success: false});}
  
    return controlador;
  }