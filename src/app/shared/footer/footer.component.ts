import { UserServiceService } from './../../auth/service/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  showTheFooter!:boolean;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(e=>{
      if(e instanceof NavigationEnd){
        console.log(e.url.toString().includes("admin"))
        this.showTheFooter =  e.url.toString().includes('auth') || e.url.toString().includes('manager') || e.url.toString().includes("admin")   ;
      }
    })
    
  }

}
