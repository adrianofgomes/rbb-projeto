export class Projeto {
    
    id:string;
    nome: string;

    static criaVazio(){
        return new Projeto("", "");
    }
    constructor (id: string, nome: string){
        this.id = id
        this.nome = nome
    }
}
  
  