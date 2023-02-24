import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup!:FormGroup;
  toChoosePosition:boolean = false;
  position!:string;

  constructor(private formBuilder:FormBuilder) { }
  

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      'email':this.formBuilder.control('',[Validators.required,Validators.email,Validators.minLength(8)]),
      'password':this.formBuilder.control('',[Validators.required,Validators.minLength(3)])
    });
  }

  login(){
    if(this.loginFormGroup.valid){
      
    }
  }

  selectPosition(position:string){
      this.position=position;
      this.toChoosePosition=false
  }

  


}
