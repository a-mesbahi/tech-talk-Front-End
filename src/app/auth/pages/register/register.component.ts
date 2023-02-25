import { UserServiceService } from './../../user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  firstName:string = "";
  lastName:string = "";
  fullName:String = `${this.firstName} : ${this.lastName} `; 
  constructor(private formBuilder:FormBuilder, private userService:UserServiceService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      "name":this.formBuilder.control('',Validators.minLength(4)),
      "firstName":this.formBuilder.control('',Validators.minLength(4)),
      "lastName":this.formBuilder.control('',Validators.minLength(4)),
      "email":this.formBuilder.control('',[Validators.email,Validators.required]),
      "password":this.formBuilder.control('',[Validators.min(4),Validators.required]),
      "linkedin":this.formBuilder.control('',[Validators.min(8),Validators.required])
    })
  }


  register(){
    this.registerForm.value.name = `${this.registerForm.value.firstName} ${this.registerForm.value.lastName}`;
    this.userService.register(this.registerForm).subscribe((res:any)=>console.log(res))
  }

}
