import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation1',
  standalone: true,
  imports: [],
  templateUrl: './animation1.component.html',
  styleUrl: './animation1.component.css',
  animations : [
    trigger('animateArc',[
      state('true',style({
        left:'400px',
        top:'20px'
      })),
      state('false',style({
        left:'0px',
        top:'20px'
      })),
      transition('false=>true',animate('1000ms linear', keyframes([
        style({left:'0px', top:'20px'}),
        style({left:'200px', top:'100px'}),
        style({left:'400px', top:'20px'}),
      ]))),
      transition('true=>false',animate('1000ms linear', keyframes([
        style({left:'400px', top:'20px'}),
        style({left:'200px', top:'100px'}),
        style({left:'0px', top:'20px'}),
      ])))
    ])
  ]
})
export class Animation1Component {
  arc : string='false';

  toggleBounce(){
    this.arc= this.arc == "false"? "true":"false";
  }

}
