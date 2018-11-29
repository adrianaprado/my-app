import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-ejercicio-frutas',
  templateUrl: './ejercicio-frutas.component.html',
  styleUrls: ['./ejercicio-frutas.component.scss']
})
export class EjercicioFrutasComponent implements OnInit {
  precioTotal: number;
  frutas: Fruta[];
  nombresFrutas: string[];

  constructor() {
    console.trace('Constructor EjercicioFrutasComponent');
    this.precioTotal = 0;
    this.loadArrayFrutas();
    this.loadArrayNombresFrutas();
  }

  ngOnInit() {
    console.trace('ngOnInit EjercicioFrutasComponent');
  }

  loadArrayFrutas(): void {
    this.frutas = [];
    let f: Fruta;
    f = new Fruta();
    f.nombre = 'Banana';
    f.precio = 3.15;
    f.calorias = 500;
    f.colores = ['Amarillo', 'Negro'];
    f.oferta = true;
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Pera';
    f.precio = 2;
    f.calorias = 350;
    f.colores = ['Amarillo', 'Verde'];
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Fresa';
    f.precio = 0.75;
    f.calorias = 100;
    f.colores = ['Rosa', 'Rojo', 'Verde'];
    f.oferta = true;
    this.frutas.push(f);

    this.frutas.forEach(el => {
      this.precioTotal = this.precioTotal + el.precio;
    });
  }

  loadArrayNombresFrutas(): void {
    this.nombresFrutas = [];
    this.frutas.forEach(element => {
      this.nombresFrutas.push(element.nombre);
    });
  }
}
