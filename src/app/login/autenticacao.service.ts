import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {stringify} from "querystring";
import {Observable} from "rxjs";
import {SessionStorageService, SessionStorage} from "ng2-webstorage";

export const keyStore: string = 'token';

@Injectable()
export class AutenticacaoService {
  //https://homologacao-adv.softplan.com.br/adv-bouncer-authorization-server/oauth/token
  //http://localhost:8080/adv-bouncer-authorization-server/oauth/token
  urlBouncerAutorizador: string = "http://172.23.237.247:8080/adv-bouncer-authorization-server/oauth/token";
  isLogado: boolean;
  redirectUrl: string;

  @SessionStorage(keyStore)
  token: Token;

  constructor(private _http: Http, private _storage: SessionStorageService) {
    if (this.token) {
      this.isLogado = true;
    }
  }

  login(credentials: Credencial): Observable<Token> {

    let headers = this.criaHeaderAutenticacao(credentials);
    let params = stringify({grant_type: 'client_credentials'});
    return this._http
      .post(this.urlBouncerAutorizador, params, {headers: headers})
      .map(res => {
        this.isLogado = true;
        this._storage.store(keyStore, res.json());
      })
      .catch(e => Observable.throw("Login invalido ou sem permissao"));
  }

  private criaHeaderAutenticacao(credentials: Credencial) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(credentials.usuario + ':' + credentials.senha));
    return headers;
  }

  logout() {
    this._storage.clear(keyStore);
    this.isLogado = false;
  }

}

export class Token {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export class Credencial {

  usuario: string;
  senha: string;

  constructor() {
  }


}
