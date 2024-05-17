import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
    @Input() message : string =""; 

    ngOnChanges(){
      console.log(`ngOnChanges hook called..!`);
      console.log(`Parent textbox value is ${this.message}`);
    }

    ngOnInit(){
      console.log(`ngOnInit hook called..!`);
    }

    ngDoCheck(){
      console.log(`ngDoCheck hook called..!`);
    }

    ngAfterContentInit(){
      console.log(`ngAfterContentInit hook called..!`);
    }

    ngAfterContentChecked(){
      console.log(`ngAfterContentChecked hook called..!`);
    }

    ngAfterViewInit(){
      console.log(`ngAfterViewInit hook called..!`);
    }

    ngAfterViewChecked(){
      console.log(`ngAfterViewChecked hook called..!`);
    }

    ngOnDestroy(){
      console.log(`ngOnDestroy hook called..!`);
    }
}
