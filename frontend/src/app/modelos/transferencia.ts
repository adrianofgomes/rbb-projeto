export class Transferencia {
   
    idProjeto:string;
    qntdTokens:number;

    static criaVazio(){
        return new Transferencia("", 0);
    }

    constructor (idProjeto: string, qntdTokens: number){
        this.idProjeto = idProjeto;
        this.qntdTokens = qntdTokens;
     }
}
  