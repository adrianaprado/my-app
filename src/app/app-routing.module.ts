import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/appcomponent/app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { PersonaDetalleComponent } from './components/persona-detalle/persona-detalle.component';
import { EjercicioFrutasComponent } from './components/ejercicio-frutas/ejercicio-frutas.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutasComponent } from './components/crud-frutas/crud-frutas.component';
import { CrudFrutasDetalleComponent } from './components/crud-frutas-detalle/crud-frutas-detalle.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'frutas', component: FrutaComponent},
  {path: 'flujo', component: FlujoInformacionComponent},
  {path: 'videojuego-detalle', component: VideojuegoDetalleComponent},
  {path: 'persona-detalle', component: PersonaDetalleComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'ejercicio-frutas', component: EjercicioFrutasComponent},
  {path: 'app-comparador', component: ComparadorComponent},
  {path: 'tareas', component: TareaComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'crud-frutas', component: CrudFrutasComponent},
  {path: 'crud-frutas-detalle/:id', component: CrudFrutasDetalleComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
