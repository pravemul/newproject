import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpclientService, Rider, Driver } from '../service/httpclient.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  riderObj: Rider = new Rider("","","","", "");
  driverObj: Driver = new Driver("","","","", "", "","","","", 0);

  constructor(private formBuilder:FormBuilder, private httpClientService: HttpclientService) { }

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

  onRiderSignInSubmit(){
    this.riderObj = new Rider(
      "","",
      this.riderSignInForm.value['email'],
      this.riderSignInForm.value['password'],
      ""
    );
    this.httpClientService.riderLogin(this.riderObj)
        .subscribe( data => {
          console.log(data);
          if(data == null)
            alert("Invalid username and/or password")
          else
            alert("Welcome "+data.firstname+" "+data.lastname)
        });
  }

  onDriverSignInSubmit(){
    console.log(  this.riderSignInForm.value,this.riderSignInForm.controls['firstName'].hasError('required'), this.profileType)
    this.driverObj = new Driver(
      "","",
      this.driverSignInForm.value['email'],
      this.driverSignInForm.value['password'],
      "","","","","",0
    );
  }

  resetForm(){
    console.log("here", this.profileType);
    this.riderSignInForm.reset()
  }

}
