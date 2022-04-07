import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Rider{
  constructor(
    public firstName:string,
    public lastName:string,
    public email:string,
    public password:string,
    public phoneNumber:string,
  ) {}
}

export class Driver{
  constructor(
    public firstName:string,
    public lastName:string,
    public email:string,
    public password:string,
    public phoneNumber:string,
    public licenseNumber:string,
    public licensePlateNumber:string,
    public carMake:string,
    public carModel:string,
    public carMakeYear:number
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
    return this.httpClient.post<Rider>("http://localhost:8080/sample/rider", rider);
  }

  public createDriver(driver: any) {
    console.log("test create driver");
    return this.httpClient.post<Rider>("http://localhost:8080/sample/driver", driver);
  }
}
