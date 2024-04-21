import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let title : string = "";
    const [gender] = args;
    if(gender == "Male"){
      title = "Mr";
    }
    else if(gender == 'Female'){
      title = "Mrs";
    }
    else{
      title = " ";
    }
   return title;
  }

}
