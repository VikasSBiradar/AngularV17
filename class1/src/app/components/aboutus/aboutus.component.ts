import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  title : string = "Epsilon employee details";
  firstName : string = "Devon";
  lastName : string = "Conway";
  mobile : number = 91423215367;

  message = (firstName : string,lastName : string) =>{
    alert(`Welcome ${firstName} ${lastName}`);
  }
}


