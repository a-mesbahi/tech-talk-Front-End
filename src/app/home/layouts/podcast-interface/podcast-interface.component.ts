import { Podcast } from './../../../podcaster/model/Podcast.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast-interface',
  templateUrl: './podcast-interface.component.html',
  styleUrls: ['./podcast-interface.component.scss']
})
export class PodcastInterfaceComponent implements OnInit {
  @Input() podcast!:Podcast;
  
  constructor() { }

  ngOnInit(): void {
  }

}
