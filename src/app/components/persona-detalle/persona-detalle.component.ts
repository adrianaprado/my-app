import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { Sexo } from 'src/app/model/Sexo';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.scss']
})
export class PersonaDetalleComponent implements OnInit {
  personaVacia: Persona;
  personaAdri: Persona;
  personaAndrea: Persona;

  constructor() {
    console.trace('Constructor PersonaDetalleComponent');
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
  }

  ngOnInit() {
    console.trace('ngInit PersonaDetalleComponent');
  }

}
