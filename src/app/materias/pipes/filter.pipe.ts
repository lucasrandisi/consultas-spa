import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3 ) return value;
    const resultMaterias: string[] = [];
    for (const materia of value) {
      if (materia.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultMaterias.push(materia);
      };
    };
    return resultMaterias;
  }

}
