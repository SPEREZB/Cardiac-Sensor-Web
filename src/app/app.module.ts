import { DiagnosticosComponent } from './diagnosticos/diagnosticos.component';
 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { TareasComponent } from './tareas/tareas.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 
import { IngresoComponent } from './ingreso/ingreso.component'; 
import { InicioComponent } from './inicio/inicio.component';
import { MedirfrecuenciaComponent } from './medirfrecuencia/medirfrecuencia.component'; 

 

@NgModule({
  declarations: [ 
    AppComponent,
    TareasComponent, 
    IngresoComponent,
    MedirfrecuenciaComponent,
    InicioComponent,
    DiagnosticosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
