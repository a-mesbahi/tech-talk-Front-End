import { UserServiceService } from './../../../auth/service/user-service.service';
import { Podcaster } from './../../../podcaster/model/Podcaster.model';
import { PodcasterService } from './../../../podcaster/services/podcaster.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-podcasters',
  templateUrl: './podcasters.component.html',
  styleUrls: ['./podcasters.component.scss']
})
export class PodcastersComponent implements OnInit {

  constructor(private podcasterService:PodcasterService,private userService:UserServiceService) { }
  url:string = environment.fireBaseUrl
  podcasters!:Podcaster[];
  page:number = 0 ;
  size:number = 6;
  openAction:boolean=false;
  openFilter:boolean=false;
  filterValue:string="All";
  showConfirmation:boolean=false;
  podcastersIdsForAction:number[] = [];
  theUpdateVerfied:number = 0;


  ngOnInit(): void {
    this.resetPodcaster()
  }

  addPodcasterToAction(id:number|null){
    if(id!=null ) {
      if(this.podcastersIdsForAction.includes(id)) this.podcastersIdsForAction = this.podcastersIdsForAction.filter(item => item !== id)
      else this.podcastersIdsForAction.push(id)
    }
  }


  action(action:number){
    this.theUpdateVerfied = action
    this.showConfirmation = true
  }

  confirm(){
    this.podcasterService.updateVerefied(this.theUpdateVerfied,this.podcastersIdsForAction).subscribe({
      next:(res)=>{
          this.showConfirmation=false;
          this.openAction=false;
          console.log(this.filterValue=="All","-".repeat(100))
          if(this.filterValue!="All"){
            this.podcasters = this.podcasters.filter(item=> !this.podcastersIdsForAction.includes(item.id!))
          }else{
            this.podcasters.forEach(podcast => {
              if(this.podcastersIdsForAction.includes(podcast.id!)){
                  podcast.verified=this.theUpdateVerfied
              }
            });
          }
      },
      error:()=>{
        this.userService.logout()
      }
    })
  }

  getPodcasters(verified:number,filterValue:string){
    this.openFilter=false;
    this.filterValue=filterValue;
    this.podcasterService.getPodcastersWithVerified(this.page,this.size,verified).subscribe({
      next:(res:Podcaster[])=>{
        this.podcasters = res
        console.log(res)
      },
      error:()=>{
        this.userService.logout()
      }
    })
  }

  resetPodcaster(){
    this.openFilter=false;
    this.filterValue="All";
    this.podcasterService.getAllpodcaster(this.page, this.size).subscribe({
      next:(res:Podcaster[])=>{
        this.podcasters = res
        console.log(res)
      },
      error:()=>{
        this.userService.logout()
      }
    })
  }


  searchPodcast(){
    
  }

}
