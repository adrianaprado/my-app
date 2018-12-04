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
  nueva: string;
  todas: boolean;
  textoFiltro: string;

  constructor( public tareaService: TareaService) {
    console.log('TareaComponent constructor');
    this.tareas = [];
    this.nueva = '';
    this.todas = true;
    this.textoFiltro = 'Todas';
  }

  ngOnInit() {
    console.log('TareaComponent ngOnInit');
    this.recargarLista();
  }

  recargarLista() {
    console.log('TareaComponent recargarLista');
    // Llamar al servicio para carga inicial de tareas. No hacerlo en constructor
    // Como this.tareaService.getAll() retorna un observable, debemos suscribirnos a el
    this.tareaService.getAll().subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      // this.tareas = data;
      this.tareas = data.map(el => el);
    });
  }

  borrar(t: Tarea) {
    console.log('borrar de TareaComponents ' + t.id);
    this.tareaService.delete(t.id).subscribe(data => {
      console.debug('data %o', data);
      this.recargarLista();
    });
  }

  nuevaTarea() {
    console.trace('TareaComponent crear nueva tarea ' + this.nueva);
    const nuevaTarea = new Tarea();
    nuevaTarea.titulo = this.nueva;
    this.tareaService.add(nuevaTarea).subscribe(data => {
      console.debug(data);
      this.recargarLista();
      this.nueva = '';
    });
  }

  terminar(t: Tarea) {
    console.trace('TareaComponent terminar tarea ' + t.id);
    this.tareaService.marcarTerminado(t).subscribe(data => {
      console.debug('data: ' + data);
      this.recargarLista();
    });
  }

  filtrar(filtro: number) {
    console.trace('TareaComponent filtrar ' + this.todas);
    if (filtro === 0) {
      this.todas = true;
    } else {
      this.todas = false;
    }
  }
}
