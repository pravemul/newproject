import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { RiderComponent } from './rider/rider.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { MapComponent } from './map/map.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';	
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    NavigationComponent,
    DriverProfileComponent,
    MapComponent,
    RiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    GooglePlaceModule,
    FontAwesomeModule,	
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
