import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from "../modelos/usuarios";
import * as sha512 from 'js-sha512';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  path:string;

  constructor(private http:HttpClient) { 
    this.path="http://localhost:8080/";
  }

  getUsuarios(){
    return this.http.get<Usuarios[]>(this.path+"listarusuarios");

  }

  getUsuario(id:number){
    return this.http.get<Usuarios>(this.path+"listarusuarios/"+id);

  }

  createUsuarios(u:Usuarios)
  {
    return this.http.post<Usuarios>(this.path+"nuevousuario",u);
  }

  updateUsuario(u:Usuarios)
  {
    return this.http.put<Usuarios>(this.path+"modificarusuario/"+u.id,u);
  }

  deleteUsuario(u:number)
  {
  return this.http.delete<Usuarios>(this.path+"borrarusuario/"+u);
  }

  verifyUserPass(usu:string,pass:string){
    return this.http.get<Usuarios>(this.path+"entrar/"+usu+"/"+sha512.sha512(pass));
  }


}
