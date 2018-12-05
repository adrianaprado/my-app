import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-crud-frutas',
  templateUrl: './crud-frutas.component.html',
  styleUrls: ['./crud-frutas.component.scss']
})
export class CrudFrutasComponent implements OnInit {
  frutas: Fruta[];
  frutaDetalle: Fruta;
  idFruta: number;

  constructor(public frutaService: FrutaService, public router: Router) {
    console.trace('CrudFrutasComponent constructor');
    this.frutas = [];
  }

  ngOnInit() {
    console.trace('CrudFrutasComponent ngOnInit');
    this.recargarLista();
  }

  recargarLista() {
    console.log('CrudFrutasComponent recargarLista');
    this.frutaService.getAll().subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      this.frutas = data.map(el => el);
    });
  }

  eliminarFruta(id: number) {
    console.trace('CrudFrutasComponent eliminarFruta');
    this.frutaService.delete(id).subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      this.recargarLista();
    });
  }

}
