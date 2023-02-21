import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class IngresoComponent implements OnInit {

  title="TAREAS";
  usuarioForm: FormGroup;
  verifiusuarioForm: FormGroup;
  personaForm: FormGroup;
  pacienteForm: FormGroup;
  tarea:any;  
  dato:any;

  constructor(
    public fb:FormBuilder,
    public servicio: TareaService, 
  ){  
  //usuario
  this.usuarioForm=this.fb.group({
    id:['',Validators.required],
    nombreUsuario:['',Validators.required],
    clave:['',Validators.required],
    tipodeusuario:['',Validators.required] 
   });;

   this.verifiusuarioForm=this.fb.group({ 
    nombreusuario:['',Validators.required],
    clave:['',Validators.required]  
   });;


   //persona
   this.personaForm=this.fb.group({
    id:['',Validators.required],
    nombre:['',Validators.required],
    apellido:['',Validators.required],
    genero:['',Validators.required], 
    numeroDeTelefono:['',Validators.required] 
   });;

  //paciente
  this.pacienteForm=this.fb.group({
    id:['',Validators.required],
    altura:['',Validators.required],
    peso:['',Validators.required],
    gruposanguineo:['',Validators.required], 
    nombreUsuario:['',Validators.required],
    clave:['',Validators.required],
    tipodeusuario:['',Validators.required] 
   });;
 
  }
   


     ngOnInit(): void {  
     }
   
     verifiusuario():any{
      let resp:any;
      this.servicio.verifiusuario(this.verifiusuarioForm.value).subscribe(respuesta=>{ 
          
          alert(respuesta) 
      });   
    }
    
     enviarusuario():any{
       this.servicio.postusuario(this.usuarioForm.value).subscribe(respuesta=>{
      alert(respuesta.message)
    }); 
      
    }

    enviarpersona():any{
      this.servicio.postpersona(this.personaForm.value).subscribe(respuesta=>{
        alert(respuesta.message)
      }); 
      
    }
 
  
    enviarpaciente():any{ 
      this.servicio.postusuario(this.pacienteForm.value).subscribe(respuesta=>{
        alert(respuesta.message)
      });   
    }
}
