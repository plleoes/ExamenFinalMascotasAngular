import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/auxiliar/global';
import { CompradoresService } from 'src/app/servicios/compradores.service';

@Component({
  selector: 'app-buscardni',
  templateUrl: './buscardni.component.html',
  styleUrls: ['./buscardni.component.css']
})
export class BuscardniComponent implements OnInit {
dni:string;
  constructor(private global:Global,private compraser:CompradoresService) { }

  ngOnInit() {
  }

  buscarDNI(){
    this.compraser.getComprador(this.dni).subscribe(com=>{
      this.global.compradorEncontrado=com;
      if (this.global.compradorEncontrado) {
        
      } else {
        
      }
    })
  }
}
