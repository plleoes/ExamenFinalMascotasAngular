import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ListadousuariosComponent } from './listadousuarios/listadousuarios.component';
import { AltausuarioComponent } from './altausuario/altausuario.component';
import { ModificacionUsuarioComponent } from './modificacion-usuario/modificacion-usuario.component';
import { AltamascotaComponent } from './altamascota/altamascota.component';
import { ListamascotasComponent } from './listamascotas/listamascotas.component';
import { ModificacionmascotaComponent } from './modificacionmascota/modificacionmascota.component';
import { BuscardniComponent } from './buscardni/buscardni.component';
import { DniencontradoComponent } from './dniencontrado/dniencontrado.component';
import { DninoencontradoComponent } from './dninoencontrado/dninoencontrado.component';



@NgModule({
  declarations: [LoginComponent, BienvenidaComponent, ListadousuariosComponent, AltausuarioComponent,ModificacionUsuarioComponent, AltamascotaComponent, ListamascotasComponent, ModificacionmascotaComponent, BuscardniComponent, DniencontradoComponent, DninoencontradoComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
