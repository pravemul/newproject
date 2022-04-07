import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RiderComponent } from './rider/rider.component';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [{path: '',redirectTo: '/navigate',pathMatch:'full'},
                        {path: 'navigate', component: NavigationComponent},
                      {path:"signUp", component:SignupComponent},
		                  {path:"signIn", component:SigninComponent},
                      {path:"driver-profile", component:DriverProfileComponent},
                      {path:"map", component:MapComponent},
                    {path:"rider", component:RiderComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
