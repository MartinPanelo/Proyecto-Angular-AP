import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PersonaComponent } from './componentes/personas/personas.component';
import { ColectivosComponent } from './componentes/colectivos/colectivos.component';
import { ViajesComponent } from './componentes/viajes/viajes.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'personas', component: PersonaComponent},
  { path: 'colectivos', component: ColectivosComponent},
  { path: 'viajes', component: ViajesComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }, 
  { path: '**', pathMatch: 'full', redirectTo: 'home' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
