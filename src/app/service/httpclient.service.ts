import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

export class Rider{
  constructor(
    public firstname:string,
    public lastname:string,
    public email:string,
    public password:string,
    public phonenumber:string,
  ) {}
}

export class Driver{
  constructor(
    public firstname:string,
    public lastname:string,
    public email:string,
    public password:string,
    public phonenumber:string,
    public driverslicense:string,
    public licensenumberplate:string,
    public carmake:string,
    public carmodel:string,
    public carmakeyear:number
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  public createRider(rider: any) {
    console.log("test create rider");
    return this.httpClient.post<Rider>("http://localhost:8080/riders", rider);
  }

  public riderLogin(rider: any) {
    console.log("test rider login");
    let queryParams = new HttpParams();
    queryParams = queryParams.append("email",rider.email);
    queryParams = queryParams.append("password",rider.password);
    console.log(queryParams)
    return this.httpClient.get<Rider>("http://localhost:8080/riders", {params: queryParams});
  }


  public createDriver(driver: any) {
    console.log("test create driver");
    return this.httpClient.post<Rider>("http://localhost:8080/drivers", driver);
  }
}
