import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compradores } from '../modelos/compradores';

@Injectable({
  providedIn: 'root'
})
export class CompradoresService {
  path:string;

  constructor(private http:HttpClient) { 
    this.path="http://localhost:8080/";
  }

  getComprador(dni:string){
    return this.http.get<Compradores>(this.path+"existecomprador/"+dni);

  }

  createComprador(c:Compradores)
  {
    return this.http.post<Compradores>(this.path+"nuevocomprador",c);
  }


}
