import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appNombreusuario]',
  providers: [{provide: NG_VALIDATORS, useExisting: NombreusuarioDirective, multi: true}]
})
export class NombreusuarioDirective implements Validator{
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const nombreusu = <string>control.value;
    if (!nombreusu) {
      return;
    }
    if (nombreusu!= nombreusu.toLowerCase()){
      return {'appNombreusuario': {'message': 'El mombre de usuario debe ser todo en minusculas'}};
    }

    return;
 
  }

  constructor() { }

}
