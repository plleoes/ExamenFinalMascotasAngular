import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, NavigationEnd } from '@angular/router';
import { Usuarios } from 'src/app/modelos/usuarios';
import { Global } from 'src/app/auxiliar/global';

@Component({
  selector: 'app-listadousuarios',
  templateUrl: './listadousuarios.component.html',
  styleUrls: ['./listadousuarios.component.css']
})
export class ListadousuariosComponent implements OnInit {
  usus:Usuarios[];
  userloged:Usuarios;
  mySubscription: any;
  constructor(private lo:UsuariosService,  private router:Router, public global: Global,private ususer:UsuariosService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function () {

      return false;
    
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
    
      if (event instanceof NavigationEnd) {
    
        // Trick the Router into believing it's last link wasn't previously loaded
    
        this.router.navigated = false;
    
      }
    
    });
    
  }

  ngOnInit() {
    this.verListadoUsuarios()
    this.userloged=JSON.parse(localStorage.getItem('usuario'));
  }

  verListadoUsuarios(){
    this.lo.getUsuarios().subscribe(usu=>{this.usus=usu;})
  }

  nuevoUsuario(){
    this.router.navigate(["altausuario"]);
  }


  editarUsuario(id:number){
    this.global.idusuamodificar=id;
    this.router.navigate(["modificacionusuario"]);
  }

  borrarUsuario(id:number){
    this.ususer.deleteUsuario(id).subscribe(usua=>{
      this.router.navigate(["bienvenida"]);
      this.router.navigate(["listadousuarios"]);
    });

  }
  
  ngOnDestroy() {

    if (this.mySubscription) {
  
      this.mySubscription.unsubscribe();
  
    }
  
  }

}
