import { Component, OnInit } from '@angular/core';
import {LocationService} from '../services/locationservice'
import {City} from '../models/city'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  cities : City;
  locations : Location;
  closeResult = '';
  constructor(private locationService:LocationService,private modalService: NgbModal,private router: Router) { }

  ngOnInit() {
     this.locationService.getAllCities().subscribe(response => {
       debugger;
      this.cities = <City>response;
    },
    err => {
      console.log("Wrong!")
    });
    this.getLocations();
 
    
  }
  delete(locationId){
    this.locationService.deleteLocation(locationId).subscribe(response =>{
      this.getLocations();
    });
    
  }
  getLocations(){
    this.locationService.getAllLocations().subscribe(response => {
      debugger;
      this.locations = <Location>response
   },
   err => {
     console.log("Wrong!")
   });
  }
  create(){
    this.router.navigate(["createlocation"]);
  }


}
