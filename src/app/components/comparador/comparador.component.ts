import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {
  frutas: Fruta[];

  f1: Fruta;
  f2: Fruta;

  constructor() {
    console.trace('Constructor ComparadorComponent');
    this.f1 = new Fruta();
    this.f2 = new Fruta();
    this.loadArrayFrutas();
    this.f1 = this.frutas[0];
    this.f2 = this.frutas[1];
  }

  ngOnInit() {
    console.trace('ngOnInit ComparadorComponent');
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
    f.descuento = 20;
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
    f.descuento = 15;
    f.imagen = 'http://libbys.es/wordpress/wp-content/uploads/2018/05/fresas.jpg';
    this.frutas.push(f);
  }

  mostrar(fruta: Fruta) {
    console.trace('Mostrar ComparadorComponent');
    this.f2 = this.f1;
    this.f1 = fruta;
  }

}
