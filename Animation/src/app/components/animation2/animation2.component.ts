import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation2',
  standalone: true,
  imports: [],
  templateUrl: './animation2.component.html',
  styleUrl: './animation2.component.css',
  animations:[
    trigger('openClose',[
      state('open', style({
        backgroundColor :'darkBlue',
        color :'#fff',
        opacity:1,
        padding:'20px'
      })),
      state('close', style({
        backgroundColor :'deepskyBlue',
        color :'#fff',
        opacity:0,
        padding:'20px'
      })),
      transition('open => close', [animate('1s')]),
      transition('close => open', [animate('1.2s')]),

    ])
  ]
})
export class Animation2Component {
  isOpen: boolean =true;

  toggleArticle(){
    this.isOpen = !this.isOpen;
  }

}
