import {Directive, forwardRef} from "@angular/core";
import {NG_VALIDATORS, Validator, FormControl} from "@angular/forms";

@Directive({
  selector: '[validateEmail][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => ValidadorEmailDirective), multi: true }
  ]
})
export class ValidadorEmailDirective implements Validator{

  constructor() { }

  validate(c: FormControl) {

    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])+.[a-z0-9]([a-z0-9-][a-z0-9])/i;
    return EMAIL_REGEXP.test(c.value) ? null : {
      validateEmail: {
        valid: false
      }
    };


  }
}
