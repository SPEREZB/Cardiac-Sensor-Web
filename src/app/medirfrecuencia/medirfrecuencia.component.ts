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
  tarea2:any; 
  constructor(
    public fb:FormBuilder,
    public ta: TareaService 
  ){}
  
     ngOnInit(): void {
         this.tareaForm=this.fb.group({
          id:['',Validators.required],
          cantpulsaciones:['',Validators.required],
          fechademedicion:['',Validators.required],
          riesgodeinfarto:['',Validators.required] 
         });;

         this.ta.gettarea().subscribe(tareaapi=>{  
          console.log('tareas', tareaapi);
          this.tarea= tareaapi;
          console.log(this.tarea);
        }, )

        this.ta.getpulso().subscribe(pulsoapi=>{  
          console.log('tareas', pulsoapi);
          this.tarea2= pulsoapi;
          console.log(this.tarea2);
        }, )
 
     }  
}