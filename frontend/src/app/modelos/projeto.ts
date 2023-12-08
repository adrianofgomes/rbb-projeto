export class Projeto {
    
    id:string;
    nome: string;
    valorMinimoViavel: number;
    valorAporte: number;
    dataFimAporte: string;
    metadadoNft: string

    static criaVazio(){
        return new Projeto("", "", 0, 0, "", "");
    }
    constructor (id: string, nome: string, valorMinimoViavel:number, valorAporte: number, dataFimAporte: string, metadadoNft: string){
        this.id = id;
        this.nome = nome;
        this.valorMinimoViavel = valorMinimoViavel;
        this.valorAporte =valorAporte;
        this.dataFimAporte = dataFimAporte;
        this.metadadoNft = metadadoNft;
    }
}
  
  