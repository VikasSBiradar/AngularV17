import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductPipe } from '../pipes/product.pipe';
import { CgstPipe } from '../pipes/cgst.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [NgFor, CurrencyPipe,ProductPipe,CgstPipe],
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.css'
})
export class CustomPipeComponent {
  products :any = [
    {
      "id":1,
      "name":"LG 55 inces TV",
      "price":50000,
      "sgst":0,
      "cgst":0
    },
    {
      "id":2,
      "name":"Samsung Mobile",
      "price":80000,
      "sgst":0,
      "cgst":0
    },
    {
      "id":3,
      "name":"Maruthi Car",
      "price":1000000,
      "sgst":0,
      "cgst":0
    },
    {
      "id":4,
      "name":"Royal Enfiled Bike",
      "price":290000,
      "sgst":0,
      "cgst":0
    }
  ]
}
