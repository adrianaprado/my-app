import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Tarea } from '../model/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  endpoint = 'http://localhost:3000/tareas';

  constructor( public http: HttpClient ) {
    console.trace('Tarea Service constructor');
  }

  getAll(): Observable<any> {
    console.trace(`TareaService getAll ${this.endpoint}`);
    return this.http.get(this.endpoint );
  }

  add(tarea: Tarea): Observable<any> {
    console.trace(`TareaService add ${this.endpoint}`);
    const body = {
      'titulo': tarea.titulo,
      'terminado': tarea.terminado
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.endpoint, body, httpOptions);
  }

  delete(id: number): Observable<any> {
    const uri = this.endpoint + '/' + id;
    console.trace(`TareaService delete ${uri}`);
    return this.http.delete(uri);
  }

  marcarTerminado(tarea: Tarea): Observable<any> {
    const uri = this.endpoint + '/' + tarea.id;
    console.trace(`TareaService marcarTerminado ${uri}`);
    const body = {
      'terminado': !tarea.terminado
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.patch(uri, body, httpOptions);
  }
}
