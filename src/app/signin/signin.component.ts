import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpclientService, Rider, Driver } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private router: Router) { }

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

  onSignInSubmit(){
    console.log(  this.riderSignInForm.value,this.riderSignInForm.controls['firstName'].hasError('required'), this.profileType)
    this.router.navigate(["rider"])
  }

  resetForm(){
    console.log("here", this.profileType);
    this.riderSignInForm.reset()
  }

}
