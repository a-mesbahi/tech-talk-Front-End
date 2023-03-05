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
  constructor(private podcastService:PodcastService) { }

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

}
