import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreusuarioDirective } from './nombreusuario.directive';
import { PasswordDirective } from './password.directive';
import { NombreDirective } from './nombre.directive';
import { ApellidosDirective } from './apellidos.directive';
import { TelefonoDirective } from './telefono.directive';



@NgModule({
  declarations: [NombreusuarioDirective, PasswordDirective, NombreDirective, ApellidosDirective, TelefonoDirective],
  imports: [
    CommonModule
  ]
})
export class ValidatorsModule { }
