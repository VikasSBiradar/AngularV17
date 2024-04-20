import { CurrencyPipe, DatePipe, DecimalPipe, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-parameterised-pipe',
  standalone: true,
  imports: [SlicePipe, CurrencyPipe, DecimalPipe, DatePipe],
  templateUrl: './parameterised-pipe.component.html',
  styleUrl: './parameterised-pipe.component.css'
})
export class ParameterisedPipeComponent {
  message : string = "A Parameterized Pipe is a part of angular that accepts one or more parameters";

  date = new Date();

}
