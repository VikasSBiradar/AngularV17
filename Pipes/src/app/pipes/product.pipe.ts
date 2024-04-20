import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gstPipe',
  standalone: true
})
export class ProductPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const [price] = args;
    return price * (9/100);
  }

}
