import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { Persona } from 'src/app/model/persona';
import { Sexo } from 'src/app/model/Sexo';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  fecha: Date;
  pi: number;
  videojuegos: Videojuego[];
  personas: Persona[];

  constructor() {
    console.trace('Entra al constructor de PipeComponent');
    this.fecha = new Date();
    this.pi  = 3.1415926535;
    this.videojuegos = [];
    this.personas = [];
    this.loadVideojuegos();
    this.loadPersonas();
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

  loadPersonas(): void {
    console.trace('Entra en loadPersonas de PipeComponents');
    let p: Persona;
    p = new Persona();
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Adriana';
    p.sexo = Sexo.F;
    this.personas.push(p);

    p = new Persona();
    p.nombre = 'Jorge';
    p.sexo = Sexo.M;
    this.personas.push(p);
  }
}
