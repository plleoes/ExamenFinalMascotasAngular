import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';
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
  constructor(private lo:UsuariosService,  private router:Router, public global: Global) { }

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


}
