import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../class/user';
import { EnrollmentService } from '../../service/enrollment.service';

@Component({
  selector: 'app-static-forms',
  standalone: true,
  imports: [FormsModule,NgFor,JsonPipe, NgIf],
  templateUrl: './static-forms.component.html',
  styleUrl: './static-forms.component.css'
})
export class StaticFormsComponent {
  topics: any = ["Angular", "React", "Node", "Javacript"];

  constructor(private enrollmentService : EnrollmentService){};

  errorMessage : any;
  submitted = false;
  userFormData(formData : any){
    this.submitted = true;
    console.log(`Form data = ${JSON.stringify(formData)}`);
    this.enrollmentService.enroll(formData).subscribe( 
      res => console.log("Success =", res),
      //error => console.log("Error =", error)
      error =>this.errorMessage = error.statusText
    )
  }

  modelForm = new User("Rust Marty","rustmarty@gmail.com","8142381423","React","morning","subscribed")
}
