import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/locationservice';
import { City } from '../models/city';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {
  cities : City;
  latitude : string = '';
  longitude : string = '';
  constructor(private locationService : LocationService) { }

  ngOnInit() {
    this.locationService.getAllCities().subscribe(response => {
      debugger;
     this.cities = <City>response;
   },
   err => {
     console.log("Wrong!")
   });
  }
  selectedCity(cityId){
    var objCity = Object.values(this.cities).find(x=>x.id == cityId);
    if(objCity){
      this.latitude = objCity.latitude;
      this.longitude = objCity.longitude;
    }

    debugger;
  }

}
