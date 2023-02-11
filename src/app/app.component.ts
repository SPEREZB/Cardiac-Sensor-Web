import { TareaService } from './tarea.service';
import { TareasComponent } from './tareas/tareas.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.Component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title="TAREAS";
  tareaForm: FormGroup;
  tarea:any;  

  constructor(
    
  ){}
  
     ngOnInit(): void {
       
 
     } 

}
