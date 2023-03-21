import { PodcastService } from './../../../podcaster/services/podcast.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Podcast } from 'src/app/podcaster/model/Podcast.model';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.scss']
})
export class PodcastsComponent implements OnInit {
  url:string = environment.fireBaseUrl
  openAction:boolean=false;
  dataArrived:boolean=false;
  podcasts!:Podcast[];
  OpenthePodcastPop:boolean=false;

  constructor(private podcastService:PodcastService) { }

  ngOnInit(): void {
    this.podcastService.getPodcasts(0,5,0).subscribe({
      next:(res)=>{
        this.podcasts=res
        setTimeout(()=>{
          this.dataArrived=true
        },2000)
      }
    })
  }


  openPodcast(id:Number|null){
    this.OpenthePodcastPop=true;
    console.log(id)
  }
  closePopUp(){
    this.OpenthePodcastPop=false;
  }

}
