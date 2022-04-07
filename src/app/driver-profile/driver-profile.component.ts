import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { HttpclientService, Rider, Driver } from '../service/httpclient.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.scss']
})
export class DriverProfileComponent implements OnInit {

  drivers:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("http://localhost:8080/sample/drivers")
    resp.subscribe((data) => this.drivers=data);
    resp.subscribe((data) => console.log(data));
  }

}
