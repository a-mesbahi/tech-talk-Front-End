import { Podcast } from './../../podcaster/model/Podcast.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayBackAudioService {
  audioCurrentTime!:any;
  isAudioPlaying!:boolean;
  pocast!:Podcast;

  showThePlayBack:EventEmitter<boolean> = new EventEmitter() ;
  constructor() { }


  toShowThePlayBack(action:boolean){
    this.showThePlayBack.emit(action)
  }

  
}
