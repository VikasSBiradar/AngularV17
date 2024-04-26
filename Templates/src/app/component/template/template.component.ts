
import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  result1 : any;
  result2 : any;

  ClickOnButton1(value : any){
    console.log(value);
    this.result1 =value;
  }

  ClickOnButton2(value : any){
    console.log(value);
    this.result2 = value;
  }


}
