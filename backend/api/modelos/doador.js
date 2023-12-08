const Doador = class{
    
    id;
    nome;
    saldo;

    static criaVazio(){
        return new Usuario("", "", 0);
    }

    constructor (id, nome, saldo){
        this.id = id;
        this.nome = nome;
        this.saldo = saldo;
     }
}
  
module.exports = Doador;