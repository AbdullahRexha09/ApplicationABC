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
 getAllLocations(){
  return this.http.get(moduleConfig.baserUrl + "api/location/getAllLocations", {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  });
 }
 deleteLocation(locationId){
  return this.http.delete(moduleConfig.baserUrl + "api/location/deleteLocation" + "?id=" + locationId, {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  });
 }
 postLocation(model){
    return this.http.post(moduleConfig.baserUrl + "api/location/postLocation", model, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      });
  }
}
