import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]',
  standalone: true
})
export class ScrollToTopDirective {

  constructor(private el : ElementRef) { }

  @HostListener('click') OnClick(){
    window.scrollTo({top : 0, behavior:'smooth'});
  }

}
