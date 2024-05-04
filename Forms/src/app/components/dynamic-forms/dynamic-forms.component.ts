import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './dynamic-forms.component.html',
  styleUrl: './dynamic-forms.component.css'
})
export class DynamicFormsComponent {
  //Example 1 : Using Formgroup and FormControl
 
  // registerForm : FormGroup = new FormGroup({
  //   userName : new FormControl('Ang'),
  //   password : new FormControl(),
  //   confirmPassword : new FormControl(),

  //   address : new FormGroup({
  //     city : new FormControl(),
  //     state : new FormControl(),
  //     postalCode : new FormControl()
  //   })
  // });

  // loadApiData(){
  //   console.log(this.registerForm.value);

  //   this.registerForm.setValue({
  //     userName :'AngularV16.5',
  //     password :'password',
  //     confirmPassword :'password',
  //     address :{
  //       city : 'Banglore',
  //       state : 'karanataka',
  //       postalCode:'560001'
  //     }
  //   })

  //   this.registerForm.patchValue({
  //     userName :'AngularV17',
  //     password :'admin@123',
  //     confirmPassword :'admin@123',
  //     address :{
  //       city : 'Bengaluru',
  //       state : 'karanataka',
  //       postalCode:'560021'
  //     }
  //   })
  // }

  //Example 2 : Using FormBuilder
  
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group({
    userName : ['',Validators.compose([Validators.required,Validators.minLength(5)])],
    password:['',Validators.required],
    confirmPassword:['',Validators.required],
    address : this.formBuilder.group({
      city:['',Validators.required],
      state :['',Validators.required],
      postalCode:['',Validators.required]
    })
  })

  loadApiData(){
    this.registerForm.setValue({
      userName :'AngularV16.5',
      password :'password',
      confirmPassword :'password',
      address :{
        city : 'Banglore',
        state : 'karanataka',
        postalCode:'560001'
      }
    })
  }

  get userName() {return this.registerForm.get('userName')}
  get password() {return this.registerForm.get('password')}
  get confirmPassword() {return this.registerForm.get('confirmPassword')}
  get city() {return this.registerForm.get('address')?.get('city')}
  get state() {return this.registerForm.get('address')?.get('state')}
  get postalCode() {return this.registerForm.get('address')?.get('postalCode')}
  
  
  

}
