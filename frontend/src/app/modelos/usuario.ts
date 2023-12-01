export class Usuario {
    
    id:string;
    nome: string;
    saldo: number;

    static criaVazio(){
        return new Usuario("", "", 0);
    }

    constructor (id: string, nome: string, saldo: number){
        this.id = id;
        this.nome = nome;
        this.saldo = saldo;
     }
}
  
  