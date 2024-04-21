import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  highlight : any = "blue";

  style1 : any = {
    background : 'teal',
    color : "#fff",
    padding : "20px",
    borderRadius : "10px"

  };

  hasError = true;

  checkStyle(){
    this.hasError = !this.hasError;
  }


}
