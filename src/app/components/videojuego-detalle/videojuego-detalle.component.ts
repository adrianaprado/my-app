import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';
import { Persona } from 'src/app/model/persona';
import { Sexo } from 'src/app/model/Sexo';

@Component({
  selector: 'app-videojuego-detalle',
  templateUrl: './videojuego-detalle.component.html',
  styleUrls: ['./videojuego-detalle.component.scss']
})
export class VideojuegoDetalleComponent implements OnInit {
  titulo: string;
  videojuego: Videojuego;
  personaVacia: Persona;
  personaAdri: Persona;
  personaAndrea: Persona;

  constructor() {
    console.trace('Constructor VideojuegoDetalleComponent');
    this.titulo = 'Aprendiendo a usar Clases';
    this.videojuego = new Videojuego();
    this.personaVacia = new Persona();
    this.personaAdri = new Persona();
    this.personaAdri.nombre = 'Adriana';
    this.personaAdri.apellidos = 'Prado Alonso';
    this.personaAdri.edad = 24;
    this.personaAdri.sexo = Sexo.F;
    this.personaAdri.email = 'adriana.prado@opendeusto.es';

    this.personaAndrea = new Persona();
    this.personaAndrea.nombre = 'Andrea';
    this.personaAndrea.apellidos = 'Pérez Millán';
    this.personaAndrea.edad = 35;
    this.personaAndrea.email = 'andreaperez@gmail.com';
    this.personaAndrea.sexo = Sexo.F;

    // Se llama asi en caso de que haya un setter
    this.videojuego.titulo = 'Yo k c';
  }

  ngOnInit() {
    console.trace('ngInit VideojuegoDetalleComponent');
  }

}
