import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {LoginGuard} from "./login/login.guard";
import {AdvComponent} from "./adv/adv.component";
import {ArrendatarioCadastroComponent} from "./arrendatario-cadastro/arrendatario-cadastro.component";
import {ArrendatarioListagemComponent} from "./arrendatario-cadastro/arrendatario-listagem/arrendatario-listagem.component";

const appRoutes: Routes = [
  {path: '',redirectTo:'adv', pathMatch:'full'},
  {path: 'adv', component: AdvComponent, canActivate:[LoginGuard]},
  {path: 'arrendatario-cadastro', component: ArrendatarioCadastroComponent, canActivate:[LoginGuard]},
  {path: 'arrendatario-listagem', component: ArrendatarioListagemComponent, canActivate:[LoginGuard]}
];

export const routing = RouterModule.forRoot(appRoutes);
