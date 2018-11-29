import { Component, OnInit, Input } from '@angular/core';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {

  @Input() fruta: Fruta;

  constructor() {
    console.trace('Constructor FrutaCardComponent');
    /*this.fruta = new Fruta();
    this.fruta.nombre = 'Melocotón';
    this.fruta.calorias = 17.4;
    this.fruta.precio = 100;
    this.fruta.oferta = true;
    this.fruta.descuento = 20;
    this.fruta.imagen = 'https://www.frutadelasarga.com/server/Portal_0008706/img/products/melocoton-de-cieza_1677407.jpg';
    */
  }

  ngOnInit() {
    console.trace('ngOnInit FrutaCardComponent');
  }

  comprar(event: Event) {
    console.trace('Comprar de FrutaCardComponent');
    alert(`Lo sentimos pero no tenemos esta opción habilidada ${this.fruta.nombre}`);
  }

}
