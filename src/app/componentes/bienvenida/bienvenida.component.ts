import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  userloged:Usuarios;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userloged=JSON.parse(localStorage.getItem('usuario'));

  }

  listausuarios(){
    this.router.navigate(["listadousuarios"]);
  }

}
