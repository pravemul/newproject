import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpclientService, Rider, Driver } from '../service/httpclient.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  riderObj: Rider = new Rider("","","","", "");
  driverObj: Driver = new Driver("","","","", "", "","","","", 0);


  //RK: Passing multiple args in constructor
  constructor(private formBuilder:FormBuilder, private httpClientService: HttpclientService) { }

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

  onRiderSignUpSubmit(){
    console.log(  this.riderSignUpForm.value,this.riderSignUpForm.controls['firstName'].hasError('required'), this.profileType)
    this.riderObj = new Rider(
      this.riderSignUpForm.value['firstName'],
      this.riderSignUpForm.value['lastName'],
      this.riderSignUpForm.value['email'],
      this.riderSignUpForm.value['password'],
      this.riderSignUpForm.value['phoneNumber']
    );
    this.httpClientService.createRider(this.riderObj)
        .subscribe( data => {
          alert("Rider added successfully.");
        });
  }

  onDriverSignUpSubmit(){
    console.log(  this.driverSignUpForm.value)
    this.driverObj = new Driver(
      this.driverSignUpForm.value['firstName'],
      this.driverSignUpForm.value['lastName'],
      this.driverSignUpForm.value['email'],
      this.driverSignUpForm.value['password'],
      this.driverSignUpForm.value['phoneNumber'],
      this.driverSignUpForm.value['carMake'],
      this.driverSignUpForm.value['carMakeYear'],
      this.driverSignUpForm.value['carMakeModel'],
      this.driverSignUpForm.value['licenseNumber'],
      this.driverSignUpForm.value['licensePlateNumber']
    );
    this.httpClientService.createDriver(this.driverObj)
        .subscribe( data => {
          alert("Driver added successfully.");
        });
  }

  resetForm(){
    console.log("here", this.profileType);
    this.riderSignUpForm.reset()
  }

}
