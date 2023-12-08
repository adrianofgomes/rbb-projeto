export class Deposito {
   
    valor:number;

    static criaVazio(){
        return new Deposito(0);
    }

    constructor (valor: number){
        this.valor = valor;
     }
}
  