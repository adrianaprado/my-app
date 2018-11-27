import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujo-informacion',
  templateUrl: './flujo-informacion.component.html',
  styleUrls: ['./flujo-informacion.component.scss']
})
export class FlujoInformacionComponent implements OnInit {
  titulo: string;
  visible: boolean;
  clase: string;
  textoBoton: string;
  nombre: string;

  constructor() {
    console.trace('Constructor de app-flujo-informacion');
    this.visible = true;
    this.titulo = 'Flujo de informacion entre la Vista Modelo y Modelo Vista';
    this.clase = 'remarcar';
    this.textoBoton = 'Mostrar';
    this.nombre = '';
  }

  ngOnInit() {
    console.trace('ngInit de FlujoInformacionComponent');
  }

  showHide() {
    console.trace('click showHide button');
    this.visible = (this.visible) ? false : true;
    this.textoBoton = (this.visible) ? 'Ocultar' : 'Mostrar';
  }

}
