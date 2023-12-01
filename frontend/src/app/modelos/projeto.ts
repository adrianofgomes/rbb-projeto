export class Projeto {
    
    id:string;
    nome: string;
    aporte: number;

    static criaVazio(){
        return new Projeto("", "", 0);
    }
    constructor (id: string, nome: string, aporte:number){
        this.id = id;
        this.nome = nome;
        this.aporte = aporte;
    }
}
  
  