import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';

@Component({
  selector: 'app-videojuego-detalle',
  templateUrl: './videojuego-detalle.component.html',
  styleUrls: ['./videojuego-detalle.component.scss']
})
export class VideojuegoDetalleComponent implements OnInit {
  titulo: string;
  videojuego: Videojuego;

  constructor() {
    console.trace('Constructor VideojuegoDetalleComponent');
    this.titulo = 'Aprendiendo a usar Clases';
    this.videojuego = new Videojuego();

    // Se llama asi en caso de que haya un setter
    this.videojuego.titulo = 'Ejemplo juego';
  }

  ngOnInit() {
    console.trace('ngInit VideojuegoDetalleComponent');
  }

}
