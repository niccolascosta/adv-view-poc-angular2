import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AutenticacaoService} from "./autenticacao.service";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if(this.autenticacaoService.isLogado) return true;

    this.autenticacaoService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
