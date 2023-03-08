import { PodcasterService } from './../../../podcaster/services/podcaster.service';
import { Podcaster } from './../../../podcaster/model/Podcaster.model';
import { Podcast } from './../../../podcaster/model/Podcast.model';
import { PodcastService } from './../../../podcaster/services/podcast.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
  animations:[
    trigger('onSearch',[
      state('default',style({
        height:'0px',
      })),
      state('dataArrived',style({
        height:'*'
      })),
      transition('default <=> dataArrived',[
        animate('0.5s')
      ])
    ])
  ]
})
export class DiscoverComponent implements OnInit {
  url:string = environment.fireBaseUrl
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
    if(this.podcastSearchedName.replace(/\s/g, '').length>0){
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
        if(this.podcatserGetted.length==0){
          this.responseReceive = false
        }
      },3000)
    }
  }



}
