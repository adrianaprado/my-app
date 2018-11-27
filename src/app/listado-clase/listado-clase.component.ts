import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-clase',
  templateUrl: './listado-clase.component.html',
  styleUrls: ['./listado-clase.component.scss']
})
export class ListadoClaseComponent implements OnInit {
  alumnos: string[];

  constructor() {
    this.alumnos = ['Adrian García', 'Adriana Prado', 'Ainara Goitia', 'Alain Muñoz', 'Andrea Pérez',
    'Asier Cornejo', 'Luis Galdós', 'Raúl Abejón', 'Valeria Valencia'];
  }

  ngOnInit() {
  }

}
