import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AutenticacaoService, Credencial} from "./autenticacao.service";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais : Credencial = new Credencial();
  loading: boolean;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
  }

  login(){
    this.loading = true;
    this._autenticacaoService.login(this.credenciais)
      .subscribe(() => {
        this._router.navigate([this._autenticacaoService.redirectUrl || '/']);
      },
      erro => {
        this.loading = false;
        alert("Login invalido");
      })
  }
}
