import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map"; 

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
  private apilocal= 'http://localhost:8080/';  
  private showTemplate = "false";
  constructor(
    private http:HttpClient
  ) { }

  setShowTemplate(showTemplate: string) {
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
  return this.http.get(this.apilocal+"frecuenciacardiaca/getData");
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
public tipous(body:any):Observable<any>{
  return this.http.post<string>(this.apilocal+"usuario/tipous/",body);
}

//GRAFICOS
pulsoDatos()
{
  const url =
  "https://api.openweathermap.org/data/2.5/forecast/daily?q=Barcelona,es&cnt=7&units=metric&appid=7dec162d0a4ae0d46539bf0a5c2e48e3";


  let urlAPI='http://localhost:8080/frecuenciacardiaca/getData';
  return this.http.get(url).map(res => res);


}

} 