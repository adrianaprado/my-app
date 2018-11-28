import { Pipe, PipeTransform } from '@angular/core';
import { Sexo } from '../model/Sexo';
import { Persona } from '../model/persona';

@Pipe({
  name: 'sexo'
})
export class PersonaPipe implements PipeTransform {

  transform(personas: Persona[], sexo: Sexo): any {
    console.debug('PersonaPipe transform');
    const resultado: Persona[] = [];

    personas.forEach(el => {
      if (el.sexo === sexo) {
        resultado.push(el);
      }
    });
    return resultado;
  }

}
