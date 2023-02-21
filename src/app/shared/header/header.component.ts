import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  isAuthPage!:boolean;

  constructor(private router : Router) { }


  ngOnInit(): void {
    this.router.events.subscribe(e=>{
      if(e instanceof NavigationEnd){
        this.isAuthPage =  e.url.toString().includes('auth');
      }
    })
  }

  openNavBar : boolean = false;
}
