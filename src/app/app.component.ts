import { Component, OnInit } from '@angular/core'; 
import { TareaService } from './tarea.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Sensor_Cardiaco'; 
  showTemplate: boolean;

  constructor(private servicio: TareaService) {}
   get():any
   {
    this.showTemplate = this.servicio.getShowTemplate();
   }
  /*
  toggleTemplate() {
    this.showTemplate = !this.showTemplate;
 }*/
 
}
