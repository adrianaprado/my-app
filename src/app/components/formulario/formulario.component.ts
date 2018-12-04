import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  simple: FormControl;
  formulario: FormGroup; // Formulario para agrupar inputs == FormControl
  nombre: FormControl; // Control o input del formulario

  constructor() {
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
        ])
    });
  }

  ngOnInit() {
    console.trace('FormularioComponent ngOnInit');
  }

  cargarFormulario() {
    this.formulario.controls.nombre.setValue('fresa');
    this.formulario.controls.precio.setValue(10);
  }

  enviar() {
    console.trace('FormularioComponent enviar');
    const fruta = new Fruta();
    fruta.nombre =  this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;

    console.debug('Llamar servicio pasando la fruta %o', fruta);
  }

}
