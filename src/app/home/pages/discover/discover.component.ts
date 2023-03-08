import { PodcasterService } from './../../../podcaster/services/podcaster.service';
import { Podcaster } from './../../../podcaster/model/Podcaster.model';
import { Podcast } from './../../../podcaster/model/Podcast.model';
import { PodcastService } from './../../../podcaster/services/podcast.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  recentPodcasts!:Podcast[];
  podcastSearchedName!:string;
  podcatserGetted!:Podcaster[];
  sendingRequest:boolean = false;
  responseReceive:boolean = false; 

  constructor(private podcastService:PodcastService,private podcasterService:PodcasterService) { }

  ngOnInit(): void {
    this.getRecentPordcasts()
  }

  getRecentPordcasts(){
    this.podcastService.getPodcasts(0,5).subscribe({
      next:(res)=>{
        this.recentPodcasts = res
      },
      error:(err)=>{
        console.log(err)
      },
    })
  }

  searchPodcaster(){
    if(this.podcastSearchedName.length>0){
      this.podcatserGetted = []     
      this.sendingRequest = true;
      this.podcasterService.getPodcastersSearched(this.podcastSearchedName).subscribe({
        next:(res)=>{
          setTimeout(()=>{
            this.podcatserGetted = res
            this.sendingRequest=false
            this.responseReceive=true
          },2000)
        },
        error:()=>{

        },
        complete:()=>{

        }
      })
    }else{
      this.podcatserGetted = []
      this.sendingRequest = true;
      setTimeout(()=>{
        this.sendingRequest = false;
      },3000)
    }
  }

}
