import { DiagnosticosComponent } from './diagnosticos/diagnosticos.component';
import { TareasComponent } from './tareas/tareas.component';
 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes 
import { IngresoComponent } from './ingreso/ingreso.component';
import { MedirfrecuenciaComponent } from './medirfrecuencia/medirfrecuencia.component';
import { InicioComponent } from './inicio/inicio.component';
import { GraficosComponent } from './graficos/graficos.component';

const routes: Routes = [
  {path:"", redirectTo:"/ingreso",pathMatch:"full"},  
  {path:"ingreso",component:IngresoComponent},
  {path:"medirfc",component:MedirfrecuenciaComponent},
  {path:"diagnosticos",component:DiagnosticosComponent},
  {path:"graf",component:GraficosComponent},
  {path:"inicio",component:InicioComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
