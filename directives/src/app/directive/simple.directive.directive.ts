import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSimpleDirective]',
  standalone: true
})
export class SimpleDirectiveDirective implements OnInit{
  @Input() color:string ="";
  constructor(private el : ElementRef) { }

  ngOnInit(): void {

    
     console.log(this.el);

     //Example 1
    //  this.el.nativeElement.style.backgroundColor = "red";
    //  this.el.nativeElement.style.display = "inline-block";
    //  this.el.nativeElement.style.border = "2px solid #ccc";
    //  this.el.nativeElement.style.padding = "20px";
    //  this.el.nativeElement.style.borderRadius = "5px";

    //Exampl2 2
    // this.el.nativeElement.classList.add('card-success');

         //Example 3
     this.el.nativeElement.style.backgroundColor = this.color;
     this.el.nativeElement.style.display = "inline-block";
     this.el.nativeElement.style.border = "2px solid #ccc";
     this.el.nativeElement.style.padding = "20px";
     this.el.nativeElement.style.borderRadius = "5px";
  }

}
