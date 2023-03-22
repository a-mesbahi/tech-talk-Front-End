import { PodcastService } from './../../../podcaster/services/podcast.service';
import { Podcast } from 'src/app/podcaster/model/Podcast.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-podcast-pop-up',
  templateUrl: './podcast-pop-up.component.html',
  styleUrls: ['./podcast-pop-up.component.scss']
})
export class PodcastPopUpComponent implements OnInit {
  @Output() closeThePopUp = new EventEmitter<boolean>()
  @Input() id!:Number; 
  podcast!:Podcast;
  constructor(private podcastService:PodcastService) { }

  ngOnInit(): void {
    this.podcastService.getSinglePodcast(this.id).subscribe({
      next:(res)=>{
        this.podcast=res
        console.log(this.podcast)
      }
    })
  }

  close(){
    this.closeThePopUp.emit(true)
  }
}
