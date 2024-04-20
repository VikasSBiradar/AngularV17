import { Component } from '@angular/core';
import { SimpleDirectiveDirective } from '../directive/simple.directive.directive';
import { ScrollToTopDirective } from '../directive/scroll-to-top.directive';

@Component({
  selector: 'app-custom-directive',
  standalone: true,
  imports: [SimpleDirectiveDirective,ScrollToTopDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {

}
