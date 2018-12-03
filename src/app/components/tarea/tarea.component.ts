import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/providers/tarea.service';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {
  tareas: Tarea[];

  constructor( public tareaService: TareaService) {
    console.log('TareaComponent constructor');
    this.tareas = [];
  }

  ngOnInit() {
    console.log('TareaComponent ngOnInit');
    // Llamar al servicio para carga inicial de tareas. No hacerlo en constructor
    // Como this.tareaService.getAll() retorna un observable, debemos suscribirnos a el
    this.tareaService.getAll().subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      // this.tareas = data;
      this.tareas = data.map(el => el);
    });
  }

  borrar(t: Tarea) {
    console.log('borrar de TareaComponents');
  }

}
