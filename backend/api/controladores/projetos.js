var Projeto = require("../modelos/projeto")
var controladorBlockchain = require("../blockchain/servico-blockchain")
module.exports = app => {
  const listaProjeto = app.data.projetos;
  const controlador = {};

  controlador.listar = async (req, res) => 
  {
      const projetos = [];
      for (prj of listaProjeto)
      {
          const valorMinimoViavel = await controladorBlockchain.recuperarValorMinimoViavelProjeto(prj.id)
          const valorAporte = await controladorBlockchain.recuperarValorAporteProjeto(prj.id);
          const dataFimAporte = await controladorBlockchain.recuperarDataFimAporteProjeto(prj.id);
          projetos.push(new Projeto(prj.id, prj.nome, valorMinimoViavel, valorAporte, dataFimAporte));
      }
      res.status(200).json(projetos)
  }

  controlador.recuperar = async (req, res) => {
    const { id } = req.params;
    const indice = listaProjeto.findIndex(proj => proj.id === id);

    if (indice === -1) {
      res.status(404).json({message: 'Projeto nao encontrado.',success: false});
      return;
    } 

    const projetoEncontrado = listaProjeto[indice];
    const valorMinimoViavel = await controladorBlockchain.recuperarValorMinimoViavelProjeto(projetoEncontrado.id);
    const valorAporte = await controladorBlockchain.recuperarValorAporteProjeto(projetoEncontrado.id);
    const dataFimAporte = await controladorBlockchain.recuperarDataFimAporteProjeto(prj.id);
    const projeto = new Projeto(projetoEncontrado.id, projetoEncontrado.nome, valorMinimoViavel, valorAporte, dataFimAporte);

    res.status(200).json({message: 'Projeto encontrado com sucesso!',success: true,data: projeto});
  }

  controlador.incluir = (req, res) => {res.status(404).json({message: 'Metodo nao implementado',success: false});};

  controlador.excluir = (req, res) => {res.status(404).json({message: 'Metodo nao implementado',success: false});};

  controlador.atualizar = (req, res) => {res.status(404).json({message: 'Metodo nao implementado',success: false});}

  return controlador;
}