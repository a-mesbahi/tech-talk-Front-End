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

  constructor(private podcasterService:PodcasterService) { }
  url:string = environment.fireBaseUrl
  podcasters!:Podcaster[];
  page:number = 0 ;
  size:number = 6;
  openAction:boolean=false;

  podcastersIdsForAction:number[] = [];


  ngOnInit(): void {
    this.podcasterService.getAllpodcaster(this.page, this.size).subscribe({
      next:(res:Podcaster[])=>{
        this.podcasters = res
        console.log(res)
      },
      error:()=>{
        
      }
    })
  }



  addPodcasterToAction(id:number|null){
    if(id!=null ) {
      if(this.podcastersIdsForAction.includes(id)) this.podcastersIdsForAction = this.podcastersIdsForAction.filter(item => item !== id)
      else this.podcastersIdsForAction.push(id)
    }
    console.log(this.podcastersIdsForAction)
  }

}
