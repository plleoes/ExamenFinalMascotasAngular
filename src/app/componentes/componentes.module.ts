import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { ModificacionUsuarioComponent } from './modificacion-usuario/modificacion-usuario.component';



@NgModule({
  declarations: [LoginComponent, BienvenidaComponent, ListadousuariosComponent, AltausuarioComponent, ModificacionComponent, ModificacionUsuarioComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
