import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ButtonModule} from "primeng/primeng";
import {AutenticacaoService} from "./login/autenticacao.service";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {routing} from "./app.routes";
import {LoginGuard} from "./login/login.guard";
import {LoginModule} from "./login/login.module";
import {AdvModule} from "./adv/adv.module";
import {Ng2Webstorage} from "ng2-webstorage";
import {ArrendatarioCadastroModule} from "./arrendatario-cadastro/arrendatario-cadastro.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
     ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    LoginModule,
    AdvModule,
    ArrendatarioCadastroModule,
    Ng2Webstorage,
    routing
  ],
  providers: [AutenticacaoService, LoginGuard],
  bootstrap: [AppComponent],

})
export class AppModule { }
