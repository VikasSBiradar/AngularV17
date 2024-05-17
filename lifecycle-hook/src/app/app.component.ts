import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    console.log(`App component called`);
  }

  inputVal : string = "";
  toDestroy : boolean = false;

  onBtnClicked(inputEle : HTMLInputElement){
    console.log(`inputEle=${inputEle}`);

    this.inputVal = inputEle.value;

    console.log(`inputVal=${this.inputVal}`);

  }

  destroyComponent():void{
    this.toDestroy = !this.toDestroy;
  }
}
