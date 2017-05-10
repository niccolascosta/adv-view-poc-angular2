import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {SessionStorageService, SessionStorage} from "ng2-webstorage";
import {Token, keyStore} from "../login/autenticacao.service";
import {ArrendatarioDto} from "./arrendatario-cadastro.component";
import * as removeAccents from 'remove-accents';
import {Observable} from "rxjs";
import {ArrendatarioFiltro} from "./arrendatario-listagem/arrendatario-listagem.component";
import {stringify} from "querystring";

@Injectable()
export class ArrendatarioService {

  @SessionStorage(keyStore)
  token: Token;
  //	https://homologacao-adv.softplan.com.br/adv-service
  urlAdvService: string = "http://172.23.237.247:8080/adv-service/";

  constructor(private _http: Http, private _storage: SessionStorageService) {
  }


  salvarArrendatario(arrendatarioDto: ArrendatarioDto): Observable<Object> {
    let headers = this.criarHeader();
    arrendatarioDto = this.normalizarArrendatario(arrendatarioDto);
    return this._http.post(this.urlAdvService + "site-adv/arrendatario", JSON.stringify(arrendatarioDto), {headers: headers});
  }

  consultarArrendatario(arrendatarioFiltro: ArrendatarioFiltro): Observable<any> {
    let headers = this.criarHeader();
    let params = stringify({'pagina': 0, 'quan-registros': 150});
    return this._http.post(this.urlAdvService + 'public/admin/arrendatario/consulta?' + params, JSON.stringify(arrendatarioFiltro), {headers: headers})
      .map(res => res.json())
      .catch(error => Observable.throw(error));
  }

  consultarArrendatarioStatus(): Observable<SimpleDto>{
    let headers = this.criarHeader();
    return this._http.get(this.urlAdvService + 'public/admin/arrendatario-status', {headers: headers})
      .map(res => res.json())
      .catch(error => Observable.throw(error));
  }

  criarHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.token.access_token);
    headers.append('Accept', 'application/json');
    return headers;
  }

  private normalizarArrendatario(arrendatarioDto: ArrendatarioDto): ArrendatarioDto {
    let nomeDominio = this.normalizarNomeDominio(arrendatarioDto.nomeAssinante);
    arrendatarioDto.senhaConfirmacao = arrendatarioDto.senha;
    arrendatarioDto.nomeDominio = nomeDominio;
    return arrendatarioDto;
  }

  private normalizarNomeDominio(nomeAssinante: string): string {
    return removeAccents(nomeAssinante).replace(/ /g, "-");
  }


}

export class SimpleDto {

  simpleDto: SimpleDtoType[];

}

export class SimpleDtoType {
  chave: number;
  valor: string;
}


