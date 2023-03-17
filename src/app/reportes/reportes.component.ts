import { TareaService } from './../tarea.service';
import { Component, OnInit } from '@angular/core';
//import * as jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
 
 
  }
  imprimir():any{ 
 

    var doc = new jsPDF(); 
    doc.html("#table");

     doc.save("a4.pdf");
  }

  public convertToPDF()
  {
  html2canvas(document.getElementById("table")!).then(canvas => {
  // Few necessary setting options
   
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  var width = pdf.internal.pageSize.getWidth();
  var height = canvas.height * width / canvas.width;
  pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
  pdf.save('REPORTE.pdf'); // Generated PDF
  });
  }

}
