import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreusuarioDirective } from './nombreusuario.directive';
import { PasswordDirective } from './password.directive';



@NgModule({
  declarations: [NombreusuarioDirective, PasswordDirective],
  imports: [
    CommonModule
  ]
})
export class ValidatorsModule { }
