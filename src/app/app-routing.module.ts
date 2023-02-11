import { TareasComponent } from './tareas/tareas.component';
 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes 
import { IngresoComponent } from './ingreso/ingreso.component';
import { MedirfrecuenciaComponent } from './medirfrecuencia/medirfrecuencia.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:"", redirectTo:"/ingreso",pathMatch:"full"},  
  {path:"ingreso",component:IngresoComponent},
  {path:"medirfc",component:MedirfrecuenciaComponent},
  {path:"data",component:TareasComponent},
  {path:"inicio",component:InicioComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
