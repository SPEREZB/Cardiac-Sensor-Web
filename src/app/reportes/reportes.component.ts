import { TareaService } from './../tarea.service';
import { Component, OnInit } from '@angular/core';
//import * as jsPDF from 'jspdf';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  reporte:any; 
  constructor( public servicio: TareaService) { }

  ngOnInit(): void {
    this.servicio.getpaciente().subscribe(respuesta => { 
      this.reporte = respuesta;
    });
 

    console.log("Funciona");

    var doc = new jsPDF();
    doc.text("Olimpo geek", 10, 10);

    doc.save("a4.pdf");
  }

}
