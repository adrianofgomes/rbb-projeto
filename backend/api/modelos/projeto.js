const Projeto = class{
    
    id;
    nome;
    valorAporte;
    valorMinimoViavel;

    static criaVazio(){
        return new Projeto("", "", 0, 0);
    }
    constructor (id, nome, valorAporte, valorMinimoViavel){
        this.id = id;
        this.nome = nome;
        this.valorAporte = valorAporte;
        this.valorMinimoViavel = valorMinimoViavel;
    }
}
  
module.exports = Projeto