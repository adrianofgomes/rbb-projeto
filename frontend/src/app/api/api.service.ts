import { Injectable } from '@angular/core';
import { Projeto } from '../modelos/projeto';
import { HttpClientUtil } from '../utils/httpclient.util';
import { Doador } from '../modelos/doador';
import { Transferencia } from '../modelos/transferencia';
import { RetornoApi } from '../modelos/retornoapi';
import { Deposito } from '../modelos/deposito';

/**
 * Handle the Kanban Conectado and Planner API
 */
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiProjetoUrl: string = 'http://localhost:3000/api/v1/projetos';
    apiDoadorUrl: string = 'http://localhost:3000/api/v1/doadores';

    constructor(private httpUtil: HttpClientUtil) { }

    async transferirToken(usuario: Doador, projeto: Projeto, qntdTokens: number): Promise<RetornoApi>{
        const url = `${this.apiDoadorUrl}/${usuario.id}/transferir`;
        let transferencia = new Transferencia(projeto.id, qntdTokens);
        const response  = await this.httpUtil.post(url,transferencia);
        const retornoApi: RetornoApi = response;
        return retornoApi;
    }

    async depositar(usuario: Doador,  valor: number): Promise<RetornoApi>{
        const url = `${this.apiDoadorUrl}/${usuario.id}/depositar`;
        let deposito = new Deposito(valor);
        const response  = await this.httpUtil.post(url,deposito);
        const retornoApi: RetornoApi = response;
        return retornoApi;
    }
  
    async listarProjeto(): Promise<Projeto[]> {
        const url = `${this.apiProjetoUrl}`;
        const response = await this.httpUtil.get(url);
        const projetos: Projeto[] = response;
        return projetos;
    }

    async listarDoador(): Promise<Doador[]> {
        const url = `${this.apiDoadorUrl}`;
        const response = await this.httpUtil.get(url);
        const doadores: Doador[] = response;
        return doadores;
    }

 }
  