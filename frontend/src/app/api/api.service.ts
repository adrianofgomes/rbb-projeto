import { Injectable } from '@angular/core';
import { Projeto } from '../modelos/projeto';
import { HttpClientUtil } from '../utils/httpclient.util';
import { Usuario } from '../modelos/usuario';
import { Transferencia } from '../modelos/transferencia';
import { RetornoApi } from '../modelos/retornoapi';

/**
 * Handle the Kanban Conectado and Planner API
 */
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiProjetoUrl: string = 'http://localhost:3000/api/v1/projetos';
    apiUsuarioUrl: string = 'http://localhost:3000/api/v1/usuarios';

    constructor(private httpUtil: HttpClientUtil) { }

    async transferirToken(usuario: Usuario, projeto: Projeto, qntdTokens: number): Promise<RetornoApi>{
        const url = `${this.apiUsuarioUrl}/${usuario.id}/transferir`;
        let transferencia = new Transferencia(projeto.id, qntdTokens);
        const response  = await this.httpUtil.post(url,transferencia);
        const retornoApi: RetornoApi = response;
        return response;
    }
  
    async listarProjeto(): Promise<Projeto[]> {
        const url = `${this.apiProjetoUrl}`;
        const response = await this.httpUtil.get(url);
        const projetos: Projeto[] = response;
        return projetos;
    }

    async listarUsuario(): Promise<Usuario[]> {
        const url = `${this.apiUsuarioUrl}`;
        const response = await this.httpUtil.get(url);
        const usuarios: Usuario[] = response;
        return usuarios;
    }

 }
  