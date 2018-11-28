import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  fecha: Date;
  pi: number;
  videojuegos: Videojuego[];

  constructor() {
    console.trace('Entra al constructor de PipeComponent');
    this.fecha = new Date();
    this.pi  = 3.1415926535;
    this.videojuegos = [];
    this.loadVideojuegos();
  }

  ngOnInit() {
    console.trace('ngInit PipeComponents');
  }

  loadVideojuegos(): void {
    console.trace('Entra en loadVideojuegos de PipeComponents');
    let v: Videojuego;
    v = new Videojuego();
    v.titulo = 'Mario Bros';
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Donkey Kong';
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Space Invaders';
    v.alquilado = false;
    this.videojuegos.push(v);

    v = new Videojuego();
    v.titulo = 'Zelda';
    v.alquilado = false;
    this.videojuegos.push(v);
  }

}
