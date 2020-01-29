import { Injectable } from '@angular/core';
import { Compradores } from '../modelos/compradores';

@Injectable()
export class Global {
  loginbtn: string = 'Login';
  idusuamodificar:number=0;  
  idmasamodificar:number=0;
  compradorEncontrado:Compradores;  
}