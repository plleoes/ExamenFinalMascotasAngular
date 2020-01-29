import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascotas } from 'src/app/modelos/mascotas';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { Global } from 'src/app/auxiliar/global';

@Component({
  selector: 'app-modificacionmascota',
  templateUrl: './modificacionmascota.component.html',
  styleUrls: ['./modificacionmascota.component.css']
})
export class ModificacionmascotaComponent implements OnInit {
  private p:number=0;
  constructor (private router: Router,private altamas:Mascotas, public global: Global, private masser:MascotasService) { }

  ngOnInit() {
    this.masser.getMascota(this.global.idmasamodificar).subscribe(mas=>{
      this.altamas=mas;
      this.p=this.altamas.precio;
    })
  }

  modificacionMascota(){
    this.altamas.precio=this.p;
    this.masser.updateMascota(this.altamas).subscribe(mas=>{
    this.router.navigate(["bienvenida"]);
    this.router.navigate(["listamascotas"]);
    this.altamas.precio=0;
    this.altamas.tipo="";
    this.altamas.nombre="";
  });

}


}
