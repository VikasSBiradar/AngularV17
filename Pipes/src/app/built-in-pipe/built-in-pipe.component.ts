import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipe',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, PercentPipe, CurrencyPipe, DatePipe, JsonPipe],
  templateUrl: './built-in-pipe.component.html',
  styleUrl: './built-in-pipe.component.css'
})
export class BuiltInPipeComponent {

  message : string = "Pipes are used to transform the data into desired format";

  data = {
    firstName : "Vikas",
    lastName : "Biradar",
    technology :"AngularV17"
  }

  date = new Date();

}
