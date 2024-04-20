import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cgst',
  standalone: true
})
export class CgstPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const [price] = args;
    return price * (18/100);
  }

}
