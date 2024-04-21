import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  title : string = "Epsilon employee details";
  firstName : string = "Devon";
  lastName : string = "Conway";
  mobile : number = 91423215367;
  siteUrl : string = window.location.href;
  myId : string = 'fullName';
  bindId : string ='Angular';

  greet = () => {
    return "Hello World";
  }

  imageUrl = 'assets/Images/bg_image.avif'
}
