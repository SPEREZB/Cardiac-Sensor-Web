import { Component, OnInit } from '@angular/core'; 
import { TareaService } from './tarea.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import 'firebase/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Sensor_Cardiaco'; 
  showTemplate= localStorage.getItem('showTemplate');


  constructor(private servicio: TareaService, private router: Router,) {}
   get():any
   {
    this.showTemplate = this.servicio.getShowTemplate();
    localStorage.setItem('showTemplate', "true");
   }
   logout():any
   {
    this.servicio.setShowTemplate("false");  
    this.showTemplate = this.servicio.getShowTemplate();
    localStorage.setItem('showTemplate', "false");
    this.router.navigate(['/', 'ingreso']);
    
   }
}
