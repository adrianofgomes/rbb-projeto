import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { Projeto } from './modelos/projeto';
import { Usuario } from './modelos/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bndes Blockchain Match Funding';

  projetos: Projeto[] = [];
  usuarios: Usuario[] = [];
  mensagemTransferencia: string = "";

  formulario: FormGroup;

  constructor(private apiService: ApiService,  private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({comboProjeto : ['', [Validators.required]], comboUsuario : ['', [Validators.required]], qntdTokensTransferir:['', [Validators.required]]});;
  }

  async ngOnInit(): Promise<void> {
    this.projetos = await this.apiService.listarProjeto();
    this.usuarios = await this.apiService.listarUsuario();
  }

  getUsuarioSelecionado(): Usuario{

    let usuario: Usuario = this.formulario.get('comboUsuario')?.value;
    return usuario;
  }

  getProjetoSelecionado() : Projeto{

    let projeto: Projeto = this.formulario.get('comboProjeto')?.value;
    return projeto;
  }

  async transferirToken(){
    let usuarioSelecionado: Usuario = this.formulario.get('comboUsuario')?.value
    let projetoSelecionado: Projeto = this.formulario.get('comboProjeto')?.value
    let qntdTokensTransferir: number = this.formulario.get('qntdTokensTransferir')?.value
  
    const response = await this.apiService.transferirToken(usuarioSelecionado, projetoSelecionado, qntdTokensTransferir );
    this.mensagemTransferencia = `${response.message}. Atualize a tela.` ;
    
  }
}
