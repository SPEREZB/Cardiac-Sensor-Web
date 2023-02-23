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

@Injectable()
export class TareaService {  
  
  private api= 'https://sensortdd4iots-production.up.railway.app/';  
  private showTemplate = false;
  constructor(
    private http:HttpClient
  ) { }

  setShowTemplate(showTemplate: boolean) {
    this.showTemplate = showTemplate;
  }

  getShowTemplate() {
    return this.showTemplate;
  }

//get
public getusuario():Observable<any>{
    return this.http.get(this.api+"usuario/all");
 }

public getpulso():Observable<any>{
  return this.http.get(this.api+"frecuenciacardiaca/find/hnQWN8qh0Di4L8eL4muq");
}
public getpaciente():Observable<any>{
  return this.http.get(this.api+"paciente/all");
}
 
//post
 public postusuario(body:any):Observable<any>{
  return this.http.post(this.api+"usuario/post",body);
}
public postpersona(body:any):Observable<any>{
  return this.http.post(this.api+"persona",body);
}
public postpaciente(body:any):Observable<any>{
  return this.http.post(this.api+"paciente",body);
} 
public verifiusuario(body:any):Observable<any>{
  return this.http.post<string>(this.api+"usuario/VerificarUsuarios/",body);
}
} 