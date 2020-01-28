import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import * as sha512 from 'js-sha512';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altausuario',
  templateUrl: './altausuario.component.html',
  styleUrls: ['./altausuario.component.css']
})
export class AltausuarioComponent implements OnInit {
  private pass:string;
  constructor (private router: Router,private altausu:Usuarios, private ususer:UsuariosService) { }

  ngOnInit() {
  }

  altaUsuario(){
    this.altausu.password=sha512.sha512(this.pass);
    this.ususer.createUsuarios(this.altausu).subscribe(usua=>{
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
