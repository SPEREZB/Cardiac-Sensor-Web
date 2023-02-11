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
  
  private api= 'http://localhost:8080/usuario';
  constructor(
    private http:HttpClient
  ) { }

  public gettarea():Observable<any>{
    return this.http.get(this.api);
 }
}
