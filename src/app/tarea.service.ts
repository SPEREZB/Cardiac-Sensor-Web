import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
export interface Message{
  source:string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class TareaService {  
  
  private api= 'https://sensortdd4iots-production.up.railway.app/'; 
  private api2= 'http://localhost:8080/usuario/VerificarUsuarios/';  
  constructor(
    private http:HttpClient
  ) { }

//get
public getusuario():Observable<any>{
    return this.http.get(this.api+"usuario/all");
 }

public getpulso():Observable<any>{
  return this.http.get(this.api+"frecuenciacardiaca/all");
}
public getpaciente():Observable<any>{
  return this.http.get(this.api+"paciente/all");
}
 
//post
 public postusuario(body:any):Observable<any>{
  return this.http.post(this.api,body);
}
public postpersona(body:any):Observable<any>{
  return this.http.post(this.api+"persona",body);
}
public postpaciente(body:any):Observable<any>{
  return this.http.post(this.api+"paciente",body);
} 
public verifiusuario(body:any):Observable<any>{
  return this.http.post<string>(this.api2,body);
}
} 