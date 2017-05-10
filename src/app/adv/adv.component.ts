import { Component, OnInit } from '@angular/core';
import {Token, keyStore} from "../login/autenticacao.service";
import {SessionStorage} from "ng2-webstorage";


@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent implements OnInit {

  @SessionStorage(keyStore)
  token:Token;

  constructor() { }

  ngOnInit() {
  }

}
