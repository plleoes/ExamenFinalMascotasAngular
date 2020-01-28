import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { bindCallback } from 'rxjs';
import { Router } from '@angular/router';
import { Global } from 'src/app/auxiliar/global';
import { Usuarios } from 'src/app/modelos/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usu:string;
  pass:string;
  userloged:Usuarios;
  
  constructor(private lo:UsuariosService,  private router:Router, public global: Global){

  }

  ngOnInit() {
  }

  login(){
    this.lo.verifyUserPass(this.usu,this.pass).subscribe(usua=>{
      this.userloged=usua;
      console.log(this.userloged.nombre);
      localStorage.setItem('usuario', JSON.stringify(this.userloged));
      this.global.loginbtn="Logout";
      this.router.navigate(["bienvenida"]);
    });

  }
}
