import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordDirective, multi: true}]
})
export class PasswordDirective implements Validator{
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const pass = <string>control.value;
    if (!pass) {
      return;
    }
    if (pass.length<6 || pass.length>12){
      return {'appPassword': {'message': 'La password tiene que tener entre 6 y 12 caracteres'}};
    }

    return;
 
  
  
  }

  constructor() { }

}
