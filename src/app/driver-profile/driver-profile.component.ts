import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.scss']
})
export class DriverProfileComponent implements OnInit {

  driver:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:8085/driverData")
    resp.subscribe((data) => this.driver=data);
  }

}
