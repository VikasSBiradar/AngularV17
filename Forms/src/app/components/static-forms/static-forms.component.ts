import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../class/user';

@Component({
  selector: 'app-static-forms',
  standalone: true,
  imports: [FormsModule,NgFor,JsonPipe, NgIf],
  templateUrl: './static-forms.component.html',
  styleUrl: './static-forms.component.css'
})
export class StaticFormsComponent {
  topics: any = ["Angular", "React", "Node", "Javacript"];

  userFormData(formData : any){
    console.log(`Form data = ${JSON.stringify(formData)}`);
  }

  modelForm = new User("Rust Marty","rustmarty@gmail.com","8142381423","React","morning","subscribed")
}
