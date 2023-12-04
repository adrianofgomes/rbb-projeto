export class Projeto {
    
    id:string;
    nome: string;
    valorMinimoViavel: number;
    valorAporte: number;

    static criaVazio(){
        return new Projeto("", "", 0, 0);
    }
    constructor (id: string, nome: string, valorMinimoViavel:number, valorAporte: number){
        this.id = id;
        this.nome = nome;
        this.valorMinimoViavel = valorMinimoViavel;
        this.valorAporte =valorAporte;
    }
}
  
  