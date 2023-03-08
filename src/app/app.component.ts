import { UserServiceService } from './auth/service/user-service.service';
import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlayBackAudioService } from './home/services/play-back-audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  isAuthPage!:boolean;
  showThePlayBack:boolean = false;

  constructor(private router:Router,private userService:UserServiceService,private playBackAudioService:PlayBackAudioService){}
  
  ngOnInit(): void {
    this.playBackAudioService.showThePlayBack.subscribe(data=>{
      this.showThePlayBack = data
    })
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isAuthPage = e.url.toString().includes("auth")
        || e.url.toString().includes("manager") 
        || e.url.toString().includes("admin");
      }
    });
    this.userService.getTheToken()
  };
  
  


}
