const Projeto = class{
    
    id;
    nome;
    valorAporte;
    valorMinimoViavel;
    dataFimAporte;

    static criaVazio(){
        return new Projeto("", "", 0, 0);
    }
    constructor (id, nome, valorMinimoViavel, valorAporte, dataFimAporte){
        this.id = id;
        this.nome = nome;
        this.valorAporte = valorAporte;
        this.valorMinimoViavel = valorMinimoViavel;
        this.dataFimAporte = dataFimAporte;
    }
}
  
module.exports = Projeto