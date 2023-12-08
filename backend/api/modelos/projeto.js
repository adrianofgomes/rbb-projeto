const Projeto = class{
    
    id;
    nome;
    valorAporte;
    valorMinimoViavel;
    dataFimAporte;
    metadadoNft;

    static criaVazio(){
        return new Projeto("", "", 0, 0, "");
    }
    constructor (id, nome, valorMinimoViavel, valorAporte, dataFimAporte, metadadoNft){
        this.id = id;
        this.nome = nome;
        this.valorAporte = valorAporte;
        this.valorMinimoViavel = valorMinimoViavel;
        this.dataFimAporte = dataFimAporte;
        this.metadadoNft = metadadoNft;
    }
}
  
module.exports = Projeto