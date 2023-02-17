import { TareaService } from '../tarea.service';  
import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
 
  title="TAREAS";
  tareaForm: FormGroup;
  tarea:any;  

  constructor(
    public fb:FormBuilder,
    public ta: TareaService 
  ){}
  
     ngOnInit(): void {
         this.tareaForm=this.fb.group({
          id:['',Validators.required],
          nombreUsuario:['',Validators.required],
          clave:['',Validators.required],
          tipodeusuario:['',Validators.required] 
         });;

         this.ta.gettarea().subscribe(tareaapi=>{  
          console.log('tareas', tareaapi);
          this.tarea= tareaapi;
          console.log(this.tarea);
        }, )
 
     }  
}