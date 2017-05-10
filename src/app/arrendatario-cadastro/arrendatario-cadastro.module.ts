import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArrendatarioCadastroComponent} from "./arrendatario-cadastro.component";
import {FormsModule} from "@angular/forms";
import {ValidadorEmailDirective} from "../validador-email.directive";
import {TextMaskModule} from "angular2-text-mask";
import {ArrendatarioService} from "./arrendadario.service";
import {MessagesModule, DataTableModule, SharedModule, CalendarModule,SpinnerModule,MultiSelectModule,InputTextModule} from "primeng/primeng";
import {ArrendatarioListagemComponent} from "./arrendatario-listagem/arrendatario-listagem.component";
import {ArrendatarioEmailPipe, ArrendatarioTelefonePipe} from "./arrendatario.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    MessagesModule,
    DataTableModule,
    SharedModule,
    CalendarModule,
    SpinnerModule,
    MultiSelectModule,
    InputTextModule
  ],
  declarations: [
    ArrendatarioCadastroComponent,
    ValidadorEmailDirective,
    ArrendatarioListagemComponent,
    ArrendatarioEmailPipe,
    ArrendatarioTelefonePipe
  ],
  exports:[
    ArrendatarioEmailPipe,
    ArrendatarioTelefonePipe
  ],
  providers:[ArrendatarioService]
})
export class ArrendatarioCadastroModule { }
