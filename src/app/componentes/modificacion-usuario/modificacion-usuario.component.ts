import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/auxiliar/global';
import { Usuarios } from 'src/app/modelos/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-modificacion-usuario',
  templateUrl: './modificacion-usuario.component.html',
  styleUrls: ['./modificacion-usuario.component.css']
})
export class ModificacionUsuarioComponent implements OnInit {
  private pass:string;
  constructor(private router: Router,private altausu:Usuarios, public global: Global,private ususer:UsuariosService) { }

  ngOnInit() {

        this.ususer.getUsuario(this.global.idusuamodificar).subscribe(usua=>{
        this.altausu=usua;
      });
  
    }
  
    modificaUsuario(){
      this.altausu.password=sha512.sha512(this.pass);
      this.ususer.updateUsuario(this.altausu).subscribe(usua=>{
        this.router.navigate(["bienvenida"]);
        this.router.navigate(["listadousuarios"]);
        this.altausu.admin=false;
        this.altausu.apellidos="";
        this.altausu.nombre="";
        this.altausu.password="";
        this.altausu.telefono="";
        this.altausu.usuario="";
      });
  
    }

  }


