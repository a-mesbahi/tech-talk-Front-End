import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
