import { Podcast } from './../../../podcaster/model/Podcast.model';
import { PodcastService } from './../../../podcaster/services/podcast.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayBackAudioService } from '../../services/play-back-audio.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-podcat-details',
  templateUrl: './podcat-details.component.html',
  styleUrls: ['./podcat-details.component.scss']
})
export class PodcatDetailsComponent implements OnInit {
  id!:number;
  podcast!:Podcast;
  url:string=environment.fireBaseUrl

  constructor(private activatedRoute:ActivatedRoute, private podcastService:PodcastService,private playBackAudioService:PlayBackAudioService) { }

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

  ngOnDestroy(): void {
    this.playBackAudioService.pocast = this.podcast
  }


}
