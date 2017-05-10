import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ArrendatarioService, SimpleDto, SimpleDtoType} from "../arrendadario.service";
import {SelectItem} from "primeng/components/common/api";
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  moduleId: module.id,
  templateUrl: './arrendatario-listagem.component.html',
  styleUrls: ['./arrendatario-listagem.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArrendatarioListagemComponent implements OnInit {

  arrendatarios: any[];
  status: SelectItem[] = [];
  pt: any;
  arrendatarioFiltro: ArrendatarioFiltro = new ArrendatarioFiltro();
  value: Date;

  constructor(private _arrendatarioService: ArrendatarioService) {
    this.obterArrendatarioStatus();
  }

  ngOnInit() {
    this.pt = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      dayNamesMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    };
  }

  buscar() {
    console.log(this.arrendatarioFiltro);
    this.consultarArrendatario();
  }

  private obterArrendatarioStatus() {
    this._arrendatarioService.consultarArrendatarioStatus()
      .subscribe(res => {
          res.simpleDto.map(simpleDto => this.status.push({label: simpleDto.valor, value: simpleDto.chave}));
        },
        error => {
          console.log(error);
        });
  }

  private consultarArrendatario() {
    this._arrendatarioService.consultarArrendatario(this.arrendatarioFiltro)
      .subscribe(res => {
          this.arrendatarios = res.arrendatarioConsultaResultadoWs;
        },
        error => {
          console.log(error);
        });
  }

  setDate(value: any, key: string) {
    let datey = moment(value);
    this.arrendatarioFiltro[key] = datey.add(1, 'days').toDate();
  }

}

export class ArrendatarioFiltro {

  arrendatarioDataCadastradoDataInicio: Date;
  arrendatarioDataCadastradoDataFim: Date;
  arrendatarioStatus: number[] = [];
  arrendatarioAtivos: boolean = false;
  arrendatarioCodigo: number = null;
  arrendatarioNome: string = '';
  usuarioAdministradorNome: string = '';
  usuarioEmail: string = '';
  usuarioAdministradorTelefone: string = '';
}
