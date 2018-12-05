// Modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/appcomponent/app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ListadoClaseComponent } from './components/listado-clase/listado-clase.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { PersonaDetalleComponent } from './components/persona-detalle/persona-detalle.component';
import { EjercicioFrutasComponent } from './components/ejercicio-frutas/ejercicio-frutas.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutasComponent } from './components/crud-frutas/crud-frutas.component';
import { CrudFrutasDetalleComponent } from './components/crud-frutas-detalle/crud-frutas-detalle.component';

// Pipes
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { PersonaPipe } from './pipes/persona.pipe';
import { TareasPipe } from './pipes/tareas.pipe';

// Providers o servicios
import { FrutaService } from './providers/fruta.service';
import { TareaService } from './providers/tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    ListadoClaseComponent,
    FlujoInformacionComponent,
    HomeComponent,
    Page404Component,
    VideojuegoDetalleComponent,
    PipeComponent,
    VideojuegoPipe,
    PersonaPipe,
    PersonaDetalleComponent,
    EjercicioFrutasComponent,
    FrutaCardComponent,
    ComparadorComponent,
    TareaComponent,
    TareasPipe,
    FormularioComponent,
    CrudFrutasComponent,
    CrudFrutasDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ngmodel banana in a box
    MatGridListModule,
    HttpClientModule, // Peticiones http asincronas
    ReactiveFormsModule
  ],
  providers: [
    FrutaService,
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
