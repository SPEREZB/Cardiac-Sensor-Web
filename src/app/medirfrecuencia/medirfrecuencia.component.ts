import { TareaService } from '../tarea.service';  
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  arr:any
  constructor(
    public fb:FormBuilder,
    public ta: TareaService 
  ){}
  
     ngOnInit(): void {
         this.tareaForm=this.fb.group({
          id:['',Validators.required],
          cantpulsaciones:['',Validators.required],
          fechademedicion:['',Validators.required],
          riesgoDeInfarto:['',Validators.required] 
         });;
 

        this.ta.getpulso().subscribe(pulsoapi=>{   
          this.tarea= pulsoapi; 
          this.arr = Object.values(this.tarea); 
        
        }, )

        this.ta.getpaciente().subscribe(pulsoapi=>{   
          this.audio= pulsoapi;
          console.log(this.audio);
        }, )
 
     }  
}