import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { Projeto } from './modelos/projeto';
import { Doador } from './modelos/doador';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bndes Blockchain Match Funding';

  projetos: Projeto[] = [];
  doadores: Doador[] = [];

  mensagemTransferencia: string = "";

  formulario: FormGroup;

  formularioDeposito: FormGroup;
  mensagemDeposito: string = "";

  constructor(private apiService: ApiService,  private formBuilder: FormBuilder) { 
    this.formulario = this.formBuilder.group({comboProjeto : ['', [Validators.required]], comboDoador : ['', [Validators.required]], qntdTokensTransferir:['', [Validators.required]]});;
    this.formularioDeposito = this.formBuilder.group({comboDoadorDeposito : ['', [Validators.required]], valorDeposito:['', [Validators.required]]});;
  }

  async ngOnInit(): Promise<void> {
    this.projetos = await this.apiService.listarProjeto();
    this.doadores = await this.apiService.listarDoador();
  }


  getDoadorSelecionado(): Doador{

    let doador: Doador = this.formulario.get('comboDoador')?.value;
    return doador;
  }

  getDoadorSelecionadoDeposito(): Doador{
    let doador: Doador = this.formularioDeposito.get('comboDoadorDeposito')?.value;
    
    return doador;
  }

  getProjetoSelecionado() : Projeto{
    let projeto: Projeto = this.formulario.get('comboProjeto')?.value;
    return projeto;
  }

  async transferirToken(){
    let doadorSelecionado: Doador = this.formulario.get('comboDoador')?.value
    let projetoSelecionado: Projeto = this.formulario.get('comboProjeto')?.value
    let qntdTokensTransferir: number = this.formulario.get('qntdTokensTransferir')?.value
  
    const response = await this.apiService.transferirToken(doadorSelecionado, projetoSelecionado, qntdTokensTransferir );
    this.mensagemTransferencia = `${response.message}. Atualize a tela.` ;
    location.reload();
    
  }

  async depositar(){
    let doadorSelecionado: Doador = this.formularioDeposito.get('comboDoadorDeposito')?.value
    let valorDeposito: number = this.formularioDeposito.get('valorDeposito')?.value
  
    const response = await this.apiService.depositar(doadorSelecionado, valorDeposito );
    this.mensagemDeposito = `${response.message}. Atualize a tela.` ;
    location.reload();
  }
}
