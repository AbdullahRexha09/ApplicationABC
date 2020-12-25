import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";
import {moduleConfig} from '../config/moduleConfig'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    invalidLogin: boolean;
    invalidRegister : boolean;
  constructor(
      private http: HttpClient,private router: Router) {
  }
  login(credentials: any) : any {
    return this.http.post(moduleConfig.baserUrl + "api/auth/login", credentials, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      });
       
  }
  register(credentials:any): any{
    return this.http.post(moduleConfig.baserUrl + "api/auth/register", credentials, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      });
  }




}
