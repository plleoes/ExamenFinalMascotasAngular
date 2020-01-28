import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { Global } from './auxiliar/global';
import { ListadousuariosComponent } from './componentes/listadousuarios/listadousuarios.component';
import { AltausuarioComponent } from './componentes/altausuario/altausuario.component';
import { Usuarios } from './modelos/usuarios';
import { NombreusuarioDirective } from './validators/nombreusuario.directive';
import { PasswordDirective } from './validators/password.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModificacionUsuarioComponent } from './componentes/modificacion-usuario/modificacion-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadousuariosComponent,
    AltausuarioComponent,
    BienvenidaComponent,
    NombreusuarioDirective,
    ModificacionUsuarioComponent,
    PasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule
    

  ],
  providers: [ Global, Usuarios ],
  bootstrap: [AppComponent]
})
export class AppModule { }
