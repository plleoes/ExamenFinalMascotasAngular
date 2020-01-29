import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascotas } from '../modelos/mascotas';
import { Tipos } from '../modelos/tipos';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  path:string;

  constructor(private http:HttpClient) { 
    this.path="http://localhost:8080/";
  }

  getMascotas(){
    return this.http.get<Mascotas[]>(this.path+"listarmascotas");

  }

  getTiposdemascotas(){
    return this.http.get<Tipos[]>(this.path+"listartiposmascotas");

  }

  getMascotasportipo(t:string){
    return this.http.get<Mascotas[]>(this.path+"listarmascotas/"+t);

  }

  getMascota(id:number){
    return this.http.get<Mascotas>(this.path+"listarmascota/"+id);

  }

  createMascota(m:Mascotas)
  {
    return this.http.post<Mascotas>(this.path+"nuevamascota",m);
  }

  updateMascota(m:Mascotas)
  {
    return this.http.put<Mascotas>(this.path+"modificarmascota/"+m.id,m);
  }

  deleteMascota(m:number)
  {
  return this.http.delete<Mascotas>(this.path+"borrarmascota/"+m);
  }




}
