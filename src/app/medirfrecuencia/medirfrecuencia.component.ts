import { TareaService } from '../tarea.service';  
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as io from 'socket.io-client';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
 


@Component({
  selector: 'app-medirfrecuencia',
  templateUrl: './medirfrecuencia.component.html',
  styleUrls: ['./medirfrecuencia.component.css']
})
export class MedirfrecuenciaComponent implements OnInit {

  title="TAREAS";
  tareaForm: FormGroup;
  tarea:any;  
  audio:any; 
  frecuencias:any;
  arr:any;
  fecha:any;
  cantPulsaciones:any;
  riesgo:any; 
 
  
  constructor(
    public fb:FormBuilder,
    public ta: TareaService,
  ){}
  
  
     ngOnInit(): void {
 

         this.tareaForm=this.fb.group({
          id:['',Validators.required],
          cantpulsaciones:['',Validators.required],
          fechademedicion:['',Validators.required],
          riesgoDeInfarto:['',Validators.required] 
         });;
       
         setInterval(() => { 
        this.ta.getpulso().subscribe(pulsoapi=>{     
        
          this.arr=pulsoapi; //Recorrer el arreglo de objetos
          this.cantPulsaciones = this.arr[this.arr.length -1].cantpulsaciones; //Obtiene el valor del campo cantPulsaciones del elemento final del arreglo
          this.fecha = this.arr[this.arr.length -1].fechademedicion; //Obtiene el valor del campo cantPulsaciones del elemento final del arreglo
          this.riesgo = this.arr[this.arr.length -1].riesgoDeInfarto; //Obtiene el valor del campo cantPulsaciones del elemento final del arreglo
        
        }, ) 
       
     
      }, 5000);
     

        this.ta.getpaciente().subscribe(pulsoapi=>{   
          this.audio= pulsoapi; 
        }, )
 
     }  
}