import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { FrutaService } from 'src/app/providers/fruta.service';
import { Fruta } from 'src/app/model/fruta';

@Component({
  selector: 'app-crud-frutas-detalle',
  templateUrl: './crud-frutas-detalle.component.html',
  styleUrls: ['./crud-frutas-detalle.component.scss']
})
export class CrudFrutasDetalleComponent implements OnInit {
  id: number;
  frutaDetalle: Fruta;
  formulario: FormGroup;
  colores: FormArray;
  urlPattern: string;

  constructor(private route: ActivatedRoute, public frutaService: FrutaService) {
    console.trace('CrudFrutasDetalleComponent constructor');
    this.id = 0;
    /* Patron para que la url de imagen empiece por http(s) y acabe por jpg, png o jpeg */
    this.urlPattern = '^(http(s?)):\/\/.+\.(jpg|png|jpeg)$';

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
          Validators.min(0.1),
          Validators.max(9999)
        ]),
      calorias: new FormControl(
        0,
          [
            Validators.required,
            Validators.min(5),
            Validators.max(99999)
          ]),
      cantidad: new FormControl(
        1,
          [
            Validators.required,
            Validators.min(1),
            Validators.max(99)
          ]),
      oferta: new FormControl(
        false,
        [
          Validators.required
        ]),
      descuento: new FormControl(
        5,
        [
          Validators.required,
          Validators.min(5),
          Validators.max(90)
        ]),
      imagen: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(this.urlPattern)
        ]),
        colores: new FormArray([this.crearColorFormGroup()],
          Validators.minLength(1))
    });

    console.trace('Formulario %o', this.formulario);
  }

  ngOnInit() {
    console.trace('CrudFrutasDetalleComponent ngOnInit');
    this.frutaDetalle = new Fruta();
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // llamar provider para conseguir datos a traves del id
      this.frutaService.getById(this.id).subscribe(data => {
        console.debug('Data: %o', data);
        this.frutaDetalle = data as Fruta;
        this.cargarFormulario();
      });
   });
  }

  cargarFormulario() {
    console.trace('CrudFrutasDetalleComponent cargarFormulario');
    this.formulario.controls.nombre.setValue(this.frutaDetalle.nombre);
    this.formulario.controls.precio.setValue(this.frutaDetalle.precio);
    this.formulario.controls.calorias.setValue(this.frutaDetalle.calorias);
    this.formulario.controls.cantidad.setValue(this.frutaDetalle.cant);
    this.formulario.controls.descuento.setValue(this.frutaDetalle.descuento);
    this.formulario.controls.oferta.setValue(this.frutaDetalle.oferta);
    this.formulario.controls.imagen.setValue(this.frutaDetalle.imagen);

    const arrayColores = new FormArray([]) as FormArray;

    this.frutaDetalle.colores.forEach(c => {
      const colorGroup = new FormGroup({
        color: new FormControl(
          c,
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(15)
          ])
      });
      arrayColores.push(colorGroup);
    });

    this.formulario.setControl('colores' , arrayColores);
  }

  crearColorFormGroup(): FormGroup {
    console.trace('CrudFrutasDetalleComponent crearColorFormGroup');
    return new FormGroup({
      color: new FormControl(
        'Verde',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ])
    });
  }

  nuevoColor() {
    console.trace('CrudFrutasDetalleComponent nuevoColor');
    const arrayColores = this.formulario.get('colores') as FormArray;
    arrayColores.push(this.crearColorFormGroup());
  }

  enviarFruta(op: number) {
    console.trace('CrudFrutasDetalleComponent enviar');
    const fruta = new Fruta();
    fruta.nombre =  this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;
    fruta.cant = this.formulario.controls.cantidad.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.oferta = this.formulario.controls.oferta.value;
    fruta.colores = this.formulario.controls.colores.value;

    console.debug('Llamar servicio pasando la fruta %o', fruta);

    if (op === 1) {
      this.frutaService.add(fruta).subscribe(data => {
        console.debug(data);
        this.formulario.controls.nombre.setValue('');
        this.formulario.controls.precio.setValue(0);
        this.formulario.controls.calorias.setValue(0);
        this.formulario.controls.cantidad.setValue(1);
        this.formulario.controls.oferta.setValue(false);
        this.formulario.controls.descuento.setValue(0);
        this.formulario.controls.imagen.setValue('');
        this.formulario.controls.colores.setValue([{color: ''}]);
      });
    } else if (op === 2) {

    }
  }
}
