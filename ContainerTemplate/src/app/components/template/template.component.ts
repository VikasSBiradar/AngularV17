import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [NgIf,NgTemplateOutlet],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  example2:boolean = true;
  example3:boolean=true;

  example3Click(){
    this.example3= !this.example3;
  }

}
