import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  profileType: string="rider"
  riderSignInForm=this.formBuilder.group({
    email:[null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:[null, [Validators.required]],
  })

  driverSignInForm=this.formBuilder.group({
    email:[null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:[null, [Validators.required]]
  })


  ngOnInit(): void {
  }

  onSignUpSubmit(){
    console.log(  this.riderSignInForm.value,this.riderSignInForm.controls['firstName'].hasError('required'), this.profileType)
    
  }

  resetForm(){
    console.log("here", this.profileType);
    this.riderSignInForm.reset()
  }

}