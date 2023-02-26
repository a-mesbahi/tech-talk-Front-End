import { AuthenticatedMoule } from './../utils/authenticated.module';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private LOGIN_ENDPOINT = "users-service/login";
  private PODCATSER_REGITSER_ENDPOINT = "users-service/podcaster/register";


  constructor(private httpClient:HttpClient) { }

  login(email:string,password:string,position:string):Observable<any>{
    return this.httpClient.post(this.LOGIN_ENDPOINT,{"email":`${email}:${position}`,"password":password})
  }


  register(registerForm: FormGroup){
    return this.httpClient.post(this.PODCATSER_REGITSER_ENDPOINT,registerForm.value)
  }


  checkToken(){
    let  token = localStorage.getItem('token');
    if(token!=null){
      let tokenJson:AuthenticatedMoule = JSON.parse(token)
    }
  }

}
