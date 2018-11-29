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
  frutasOferta: Fruta[];
  frutasRojas: Fruta[];
  frutaOferta: Fruta;
  frutaOfertaVerde: Fruta;

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
    console.trace('loadArrayFrutas de EjercicioFrutasComponent');
    this.frutas = [];
    let f: Fruta;
    f = new Fruta();
    f.nombre = 'Banana';
    f.precio = 3.15;
    f.calorias = 500;
    f.colores = ['Amarillo', 'Negro'];
    f.oferta = true;
    f.imagen = 'http://padeladdict.com/wp-content/uploads/2012/12/platano2.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Pera';
    f.precio = 2;
    f.calorias = 350;
    f.colores = ['Amarillo', 'Verde'];
    f.imagen = 'http://www.cajanature.com/405-large_default/pera-ecologica-.jpg';
    this.frutas.push(f);

    f = new Fruta();
    f.nombre = 'Fresa';
    f.precio = 0.75;
    f.calorias = 100;
    f.colores = ['Rosa', 'Rojo', 'Verde'];
    f.oferta = true;
    f.imagen = 'http://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg';
    this.frutas.push(f);

    /*this.frutas.forEach(el => {
      this.precioTotal = this.precioTotal + el.precio;
    });*/

    this.precioTotal = this.frutas.map(el => el.precio).reduce((c, p) => c + p);
    this.nombresFrutas = this.frutas.map(el => el.nombre);
    this.frutasOferta = this.frutas.filter(el => el.oferta);
    this.frutasRojas = this.frutas.filter(el => el.colores.find(c => c === 'Rojo'));
    this.frutaOferta = this.frutas.find(el => el.oferta === true);
    this.frutaOfertaVerde = this.frutas.filter(el => el.colores.find(c => c === 'Verde')).find(el => el.oferta);
    // this.frutaOfertaVerde = this.frutas.find( fr => fr.oferta && (fr.colores.find(color => color === 'Verde') === 'Verde'));
  }

  loadArrayNombresFrutas(): void {
    /*this.nombresFrutas = [];
    this.frutas.forEach(element => {
      this.nombresFrutas.push(element.nombre);
    });*/
  }
}
