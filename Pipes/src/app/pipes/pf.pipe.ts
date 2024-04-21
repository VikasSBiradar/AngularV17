import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pf',
  standalone: true
})
export class PfPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let isEligibleForPF : string = "";
    const [Salary] = args;
    if(Salary <= 15000){
      isEligibleForPF = "No";
    }
    else{
      isEligibleForPF = "Yes";
    }
    return isEligibleForPF;
  }

}
