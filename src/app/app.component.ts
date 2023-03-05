import { UserServiceService } from './auth/service/user-service.service';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuthPage!:boolean;
  constructor(private router:Router,private userService:UserServiceService){}
  
  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isAuthPage = e.url.toString().includes("auth") || e.url.toString().includes("manager");
      }
    });
    this.userService.getTheToken()
  };
  
  


}
