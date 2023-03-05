import { Podcast } from './../../../podcaster/model/Podcast.model';
import { PodcastService } from './../../../podcaster/services/podcast.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-podcat-details',
  templateUrl: './podcat-details.component.html',
  styleUrls: ['./podcat-details.component.scss']
})
export class PodcatDetailsComponent implements OnInit {
  id!:number;
  podcast!:Podcast;
  constructor(private activatedRoute:ActivatedRoute, private podcastService:PodcastService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
    });

    this.podcastService.getSinglePodcast(this.id).subscribe({
      next:(res)=>{
        this.podcast = res
      }
    })

  }

}
