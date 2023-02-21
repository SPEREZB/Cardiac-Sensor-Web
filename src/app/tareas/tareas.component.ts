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
  tareaForm2: FormGroup;
  tarea:any;  

  constructor(
    public fb:FormBuilder,
    public ta: TareaService 
  ){}
  
     ngOnInit(): void {  
     }  
}