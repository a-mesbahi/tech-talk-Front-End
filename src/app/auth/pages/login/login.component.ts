import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Next } from 'react-bootstrap/esm/PageItem';
import { UserServiceService } from '../../service/user-service.service';
import { AuthenticatedMoule } from '../../utils/authenticated.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup!:FormGroup;
  toChoosePosition:boolean = false;
  position!:string;
  sendingRequest:boolean = false;
  loginError:boolean=false;

  constructor(private formBuilder:FormBuilder,private userService:UserServiceService) { }
  

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      'email':this.formBuilder.control('',[Validators.required,Validators.email,Validators.minLength(8)]),
      'password':this.formBuilder.control('',[Validators.required,Validators.minLength(3)])
    });
  }

  login(){
    if(this.loginFormGroup.valid){
      this.sendingRequest = true
      this.userService.login(this.loginFormGroup.value.email,this.loginFormGroup.value.password,this.position)
      .subscribe({
        next:(re:AuthenticatedMoule)=>{
          localStorage.setItem('token',JSON.stringify(re))
          this.userService.isLoggedIn.next(true);
        },
        error:(err)=>{
          setTimeout(()=>{
            this.loginError=true
            this.sendingRequest=false
          },2000)
        },
        complete:()=>{
          setTimeout(()=>{
            this.sendingRequest = false
            this.userService.successLogin()
          },3000)
        }
      })
    }
  }

  selectPosition(position:string){
      this.position=position;
      this.toChoosePosition=false
  }

  


}
