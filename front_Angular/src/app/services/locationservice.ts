import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";
import { moduleConfig } from '../config/moduleConfig';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
      private http: HttpClient,private router: Router) {
  }

 getAllCities() {
  return this.http.get(moduleConfig.baserUrl + "api/location/getAllCities", {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  });
 }




}
