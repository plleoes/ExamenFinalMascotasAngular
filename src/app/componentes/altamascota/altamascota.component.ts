import { Component, OnInit } from '@angular/core';
import { Mascotas } from 'src/app/modelos/mascotas';
import { Router } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-altamascota',
  templateUrl: './altamascota.component.html',
  styleUrls: ['./altamascota.component.css']
})
export class AltamascotaComponent implements OnInit {
  private p:number=0;
  constructor (private router: Router,private altamas:Mascotas, private masser:MascotasService) { }

  ngOnInit() {
  }

  altaMascota(){
    this.altamas.precio=this.p;
    this.masser.createMascota(this.altamas).subscribe(mas=>{
      this.router.navigate(["bienvenida"]);
      this.router.navigate(["listamascotas"]);
      this.altamas.precio=0;
      this.altamas.tipo="";
      this.altamas.nombre="";
    });

  }
}
