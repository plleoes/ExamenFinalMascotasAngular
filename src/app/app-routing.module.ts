import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ListadousuariosComponent } from './componentes/listadousuarios/listadousuarios.component';
import { AltausuarioComponent } from './componentes/altausuario/altausuario.component';
import { ModificacionUsuarioComponent } from './componentes/modificacion-usuario/modificacion-usuario.component';
import { ListamascotasComponent } from './componentes/listamascotas/listamascotas.component';
import { AltamascotaComponent } from './componentes/altamascota/altamascota.component';
import { ModificacionmascotaComponent } from './componentes/modificacionmascota/modificacionmascota.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},{
  path: 'listadousuarios',
  component: ListadousuariosComponent
},{
  path: 'altausuario',
  component: AltausuarioComponent
},{
  path: 'listamascotas',
  component: ListamascotasComponent
},{
  path: 'modificacionmascota',
  component: ModificacionmascotaComponent
},{
  path: 'altamascotas',
  component: AltamascotaComponent
},{
  path: 'modificacionusuario',
  component: ModificacionUsuarioComponent
},
{
  path: 'bienvenida',
  component: BienvenidaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
