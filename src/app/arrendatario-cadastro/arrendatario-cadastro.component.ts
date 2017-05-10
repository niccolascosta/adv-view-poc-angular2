import {Component, ViewChild} from "@angular/core";
import {Message} from "primeng/primeng";
import {NgForm} from "@angular/forms";
import {ArrendatarioService} from "./arrendadario.service";

@Component({
  moduleId: module.id,
  templateUrl: './arrendatario-cadastro.component.html',
  styleUrls: ['./arrendatario-cadastro.component.css']
})
export class ArrendatarioCadastroComponent {

  @ViewChild('f')
  form: NgForm;

  arrendatario: ArrendatarioDto = new ArrendatarioDto();
  mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d?/];
  loading: boolean;
  msgs: Message[] = [];

  constructor(private _arrendatarioService: ArrendatarioService) {
  }


  cadastrarArrendatario() {
    console.log("Recebendo arrendatario.")
    console.log(this.arrendatario);
    this.loading = true;
    this.msgs = [];
    this._arrendatarioService.salvarArrendatario(this.arrendatario)
      .subscribe(res => {
          this.msgs.push({severity: 'success', detail: 'Arrendatario criado com sucesso'});
          this.arrendatario = new ArrendatarioDto();
          this.loading = false;
          this.form.onReset();
        },
        error => {
          let itensValidacao = JSON.parse(error._body).validacao.map(item => item.itemValidacao[0].chaveErro);
          itensValidacao.map(item => this.msgs.push({severity: 'warn', detail: this.obterTextoMensagemPelaChave(item)}))
          this.loading = false;
        });
  }

  private obterTextoMensagemPelaChave(chaveMensagem: string): string {
    switch (chaveMensagem) {
      case 'erro.validacao.arrendatario.senha.nao.informado':
        return 'Informe a senha.';
      case 'erro.validacao.arrendatario.senha.fora.formado':
        return 'A senha deve conter ao menos 6 caracteres, com ao menos um número e uma letra.';
      case 'erro.validacao.arrendatario.senha.tamanhoMaximo':
        return 'Sua senha deve possuir no máximo 255 caracteres.';
      case 'erro.validacao.arrendatario.senha.tamanhoMinimo':
        return 'Sua senha deve possuir no mínimo 6 caracteres.';
      case 'erro.validacao.arrendatario.email.tamanhoMaximo':
        return 'O campo E-mail deve conter no máximo 255 caracteres.';
      case 'erro.validacao.arrendatario.email.invalido':
        return 'E-mail informado inválido.';
      case 'erro.validacao.arrendatario.email.naoInformado':
        return 'Informe o e-mail.';
      case 'erro.validacao.arrendatario.nome.tamanho.invalido':
        return 'O campo Nome do Assinante deve conter tamanho mínimo de 2 e máximo de 26 caracteres.';
      case 'erro.validacao.arrendatario.nome.nao.informado':
        return 'Informe o Nome do Assinante.';
      case 'erro.validacao.arrendatario.nome.duplicado':
        return 'Já existe um registro com este Nome.';
      case 'erro.validacao.arrendatario.dominio.nome.foraPadrao':
        return 'O Nome deve estar em caixa baixa e conter apenas letras, números ou traços. Não pode conter somente números e não pode começar e terminar com traço.';
      case 'erro.validacao.arrendatario.email.ja.existe':
        return 'Já existe uma conta para o e-mail informado. Favor verficar seu e-mail para maiores informações de recuperação.';
      case 'erro.validacao.arrendatario.aceitou.termo.invalido':
        return 'Confirme o termo de aceite.';
    }
  }
}

export class ArrendatarioDto {

  nomeAssinante: string;
  nomeDominio: string;
  email: string;
  senha: string;
  senhaConfirmacao: string;
  numeroTelefone: string;
  tipoPessoa: string = "FISICA";
  aceitouTermo: boolean;
  justificativaSemCpfCnpj: string = 'cadastro realizado pelo site';

}
