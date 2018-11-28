import { Pipe, PipeTransform } from '@angular/core';
import { Videojuego } from '../model/videojuego';


@Pipe({
  name: 'alquilado'
})
export class VideojuegoPipe implements PipeTransform {

  transform(videojuegos: Videojuego[], alquilado: boolean): any {
    console.debug('VideojuegosPipe transform');
    const resultado: Videojuego[] = [];

    videojuegos.forEach(element => {
      if (element.alquilado === alquilado) {
        resultado.push(element);
      }
    });
    return resultado;
  }

}
