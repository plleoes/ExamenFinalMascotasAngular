import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ListadousuariosComponent } from './componentes/listadousuarios/listadousuarios.component';
import { AltausuarioComponent } from './componentes/altausuario/altausuario.component';
import { ModificacionUsuarioComponent } from './componentes/modificacion-usuario/modificacion-usuario.component';


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
