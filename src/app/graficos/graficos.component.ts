import { TareaService } from './../tarea.service';
import { Component, OnInit, Injectable } from '@angular/core';  
 
import { map } from 'rxjs/operators';
import { Chart,registerables } from 'chart.js';
import {CategoryScale} from 'chart.js';  
Chart.register(...registerables);

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})

 
export class GraficosComponent implements OnInit { 
  chart = [];  
 

  constructor(private servicio: TareaService) { }
 

  ngOnInit():void {

    Chart.register(CategoryScale);
    this.servicio.getpulso().subscribe(data => {
   
      let valores = data.map((data: { cantpulsaciones: any; }) => data.cantpulsaciones);  
      let fecha = data.map((data: { fechademedicion: any; }) => data.fechademedicion); 

      new Chart('canvas', {
        type: 'line',
        data: {
          labels: fecha,
          datasets: [
            {
              data: valores,
              borderColor: '#15d3bd',
              fill: false,
            } 
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: {
                display: true,
              },
            },
            y: {
              ticks: {
                display: true,
              },
            },
          },
        },
      });
    });
  
  }
}
