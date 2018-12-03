import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {
  frutas: Fruta[];

  f1: Fruta;
  f2: Fruta;

  frutaRecibida: Fruta;
  frutasRecibidas: Fruta[];
  precioTotal: number;

  // Fruta Service es @Injectable por lo que debemos declararlo en el constructor
  // Nunca haremos new y no usarlo dentro del constructor, sino a partir del ngOnInit
  constructor( public frutaService: FrutaService ) {
    console.trace('Constructor ComparadorComponent');
    this.frutas = [];
    this.f1 = new Fruta();
    this.f2 = new Fruta();

    this.frutasRecibidas = [];
    this.precioTotal = 0;
  }

  ngOnInit() {
    console.trace('ngOnInit ComparadorComponent');
    this.frutaService.getAll().subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      this.frutas = data.map(el => el);
    });
    this.f1 = this.frutas[0];
    this.f2 = this.frutas[1];
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

  actualizarCarro(event: Event) {
    console.debug('ComparadorComponent actualizarCarro recibimos evento del componente hijo');
    console.debug('Parametro frutaClick = %o', event['frutaClick']);

    this.frutaRecibida = event['frutaClick'];

    this.precioTotal += this.frutaRecibida.precio;

    let f: Fruta;
    f = this.frutasRecibidas.find(el => el.nombre === this.frutaRecibida.nombre);
    if (f !== undefined) {
      const i = this.frutasRecibidas.indexOf(f);
      f.cant = f.cant + 1;
      this.frutasRecibidas[i] = f;
    } else {
      this.frutasRecibidas.push(this.frutaRecibida);
    }
  }

  borrarProducto(fruta: Fruta) {
    console.debug('borrarProducto de ComparadorComponent');
    this.precioTotal = this.precioTotal - (fruta.precio * fruta.cant);
    fruta.cant = 1;
    let pos: number;
    pos = this.frutasRecibidas.indexOf(fruta);
    this.frutasRecibidas.splice(pos , 1);
  }

  anyadir(fruta: Fruta) {
    fruta.cant += 1;
    this.precioTotal += fruta.precio;
  }

  quitar(fruta: Fruta) {
    fruta.cant -= 1;
    if (fruta.cant < 1) {
      fruta.cant = 1;
    } else {
      this.precioTotal -= fruta.precio;
    }
  }

}
