import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';
import { FrutaService } from 'src/app/providers/fruta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  simple: FormControl;
  formulario: FormGroup; // Formulario para agrupar inputs == FormControl
  // nombre: FormControl; // Control o input del formulario

  constructor(public frutaService: FrutaService) {
    console.trace('FormularioComponent constructor');

    // Control unico
    this.simple = new FormControl('');
    this.simple.setValue('Fresa');

    // Agrupacion de controles == formulario
    this.formulario = new FormGroup({
      nombre: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]),
      precio: new FormControl(
        0, // Con valor inicial
        [ // Validaciones
          Validators.required,
          Validators.minLength(0.01),
          Validators.maxLength(9999)
        ]),
        calorias: new FormControl(0),
        cantidad: new FormControl(1),
        colores: new FormControl(),
        oferta: new FormControl(false),
        descuento: new FormControl(0),
        imagen: new FormControl('')
    });
  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
  }

  cargarFormulario() {
    this.formulario.controls.nombre.setValue('melocoton');
    this.formulario.controls.precio.setValue(10);
    this.formulario.controls.calorias.setValue(5);
    this.formulario.controls.cantidad.setValue(2);
    this.formulario.controls.descuento.setValue(10);
    this.formulario.controls.oferta.setValue(true);
    // tslint:disable-next-line:max-line-length
    this.formulario.controls.imagen.setValue('https://www.frutadelasarga.com/server/Portal_0008706/img/products/melocoton-de-cieza_1677407.jpg');
  }

  enviar() {
    console.trace('FormularioComponent enviar');
    const fruta = new Fruta();
    fruta.nombre =  this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.cant = this.formulario.controls.cantidad.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.oferta = this.formulario.controls.oferta.value;

    console.debug('Llamar servicio pasando la fruta %o', fruta);

    this.frutaService.add(fruta).subscribe(data => {
      console.debug(data);
      this.formulario.controls.nombre.setValue('');
      this.formulario.controls.precio.setValue(0);
      this.formulario.controls.calorias.setValue(0);
      this.formulario.controls.cantidad.setValue(1);
      this.formulario.controls.oferta.setValue(false);
      this.formulario.controls.descuento.setValue(0);
      this.formulario.controls.calorias.setValue('');
    });
  }

}
