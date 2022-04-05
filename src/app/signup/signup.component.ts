import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  profileType: string="rider"
  riderSignUpForm=this.formBuilder.group({
    firstName:[null, [Validators.required]],
    lastName:[null, [Validators.required]],
    email:[null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:[null, [Validators.required]],
    phoneNumber:[null, [Validators.required]],
  })

  driverSignUpForm=this.formBuilder.group({
    firstName:[null, [Validators.required]],
    lastName:[null, [Validators.required]],
    email:[null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:[null, [Validators.required]],
    phoneNumber:[null, [Validators.required]],
    licenseNumber:[null, [Validators.required]],
    licensePlateNumber:[null, [Validators.required]],
    carMake:[null, [Validators.required]],
    carModel:[null, [Validators.required]],
    carMakeYear:[null, [Validators.required]]
  })

  ngOnInit(): void {
  }

  onSignUpSubmit(){
    console.log(  this.riderSignUpForm.value,this.riderSignUpForm.controls['firstName'].hasError('required'), this.profileType)
    
  }

  resetForm(){
    console.log("here", this.profileType);
    this.riderSignUpForm.reset()
  }

}
