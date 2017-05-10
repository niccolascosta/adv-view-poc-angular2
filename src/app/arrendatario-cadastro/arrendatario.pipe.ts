import {Pipe, PipeTransform} from "@angular/core";
import * as _ from 'lodash';

@Pipe({
  name:'arrendatarioTelefonePrincipal'
})
export class ArrendatarioTelefonePipe implements PipeTransform{

  transform(value: any): string {
    if(!value){
      return null;
    }
    let telefone = _.head(_.filter(value, telefone => telefone.principal));
    return telefone ? telefone.telefone.numeroTelefone : null;
  }
}

@Pipe({
  name:'arrendatarioEmailPrincipal'
})
export class ArrendatarioEmailPipe implements PipeTransform{

  transform(value: any): string {
    if(!value){
      return null;
    }
    let pessoaEmail = _.head(_.filter(value, pessoaEmail => pessoaEmail.principal));
    return pessoaEmail ? pessoaEmail.email : null;
  }

}
