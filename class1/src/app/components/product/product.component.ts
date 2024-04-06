import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  data1 : any;
  data2 : any;
  data3 : any;

  clickEvent(){
    this.data1 = "You have triggered event 1";
  }

  clickEvent2(Event : any){
    console.log(Event);
    this.data2 = Event.type;
  }

}
