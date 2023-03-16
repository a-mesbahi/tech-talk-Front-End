import { UserServiceService } from './../../auth/service/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isAuthPage!:boolean;
  isLoggedIn:boolean = false;
  openNavBar : boolean = false;
  constructor(private router : Router,private userService:UserServiceService) { }


  ngOnInit(): void {
    this.router.events.subscribe(e=>{
      if(e instanceof NavigationEnd){
        console.log(e.url.toString())
        this.isAuthPage =  e.url.toString().includes('auth') || e.url.toString().includes('manager') || e.url.toString().includes("admin")   ;
      }
    })
    this.userService.isLoggedIn.subscribe((data)=>{
      this.isLoggedIn = data
      console.log(data)
    })
  }

  logout(){
    this.userService.logout()
  }

  
}
