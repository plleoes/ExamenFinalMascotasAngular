import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios';
import { Mascotas } from 'src/app/modelos/mascotas';
import { MascotasService } from 'src/app/servicios/mascotas.service';
import { Router, NavigationEnd } from '@angular/router';
import { Global } from 'src/app/auxiliar/global';
import { Tipos } from 'src/app/modelos/tipos';

@Component({
  selector: 'app-listamascotas',
  templateUrl: './listamascotas.component.html',
  styleUrls: ['./listamascotas.component.css']
})
export class ListamascotasComponent implements OnInit {
  mascotas:Mascotas[];
  userloged:Usuarios;
  tipos:Tipos[];
  mySubscription: any;
  constructor(private maser:MascotasService,  private router:Router, public global: Global,private masser2:MascotasService) { 
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
    this.cargarTipos();
    this.userloged=JSON.parse(localStorage.getItem('usuario'));
  }

  verListadoMascotas(){
    this.maser.getMascotas().subscribe(mas=>{this.mascotas=mas})
  }

  verListadoMascotasportipo(t:string){
    console.log("tipo: "+t)

    if (t=="Todos") {
      this.maser.getMascotas().subscribe(mas=>{
        this.mascotas=mas;
        this.router.navigate(["listamascotas"]);
      })
    } else {
      this.maser.getMascotasportipo(t).subscribe(mas=>{
        this.mascotas=mas;
      })
    }
  }

  cargarTipos(){
    this.maser.getTiposdemascotas().subscribe(tip=>{
      this.tipos=tip;
      console.log("tipos:"+this.tipos)

      this.verListadoMascotas();
    })
  }

  nuevaMascota(){
    this.router.navigate(["altamascotas"]);
  }


  editarMascota(id:number){
    this.global.idmasamodificar=id;
    this.router.navigate(["modificacionmascota"]);
  }

  borrarMascota(id:number){
    this.masser2.deleteMascota(id).subscribe(mas=>{
      this.router.navigate(["bienvenida"]);
      this.router.navigate(["listamascotas"]);
    });

  }
  
  ngOnDestroy() {

    if (this.mySubscription) {
  
      this.mySubscription.unsubscribe();
  
    }
  
  }

}
