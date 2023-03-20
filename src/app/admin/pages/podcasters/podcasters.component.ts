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

}
