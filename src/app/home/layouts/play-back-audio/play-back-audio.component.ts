import { AudioPlyerOptions } from './audioPlayer';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { PlayBackAudioService } from '../../services/play-back-audio.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-play-back-audio',
  templateUrl: './play-back-audio.component.html',
  styleUrls: ['./play-back-audio.component.scss'],
  
})
export class PlayBackAudioComponent extends AudioPlyerOptions implements OnInit  {
  @Input() width: any;
  @Input() height: any;
  @Input() backgroundColor: any;
  @Input() audioTimeColor: any;
  @Input() audioTitleColor: any;
  @Input() volumeSliderColor: any;
  @Input() timeSliderColor: any;
  @Input() audioList:string[] = [];
  @Input() next = true;
  @Input() previous = true;
  @Input() shuffle = true;
  @Input() repeat = true;
  @Input() scrollTitle = false;
  @Input() playButtonColor = "black";
  @Input() pauseButtonColor = "black";
  @Input() nextButtonColor = "black";
  @Input() previousButtonColor = "black";
  @Input() repeatButtonColor = "black";
  @Input() activeRepeatButtonColor = "black";
  @Input() volumeButtonColor = "black";
  @Input() muteButtonColor = "black";
  @Input() audio!:string;
  @Output() nextEvent = new EventEmitter();
  @Output() previousEvent = new EventEmitter();
  @Output() repeatEvent = new EventEmitter();
  @Output() shuffleEvent = new EventEmitter();
  @Output() seekEvent = new EventEmitter();


  selectedAudio: any;
  currentAudioIndex = 0;
  repeatActive = false;
  isError = false;
  isShuffle = false;
  volumeBeforeMute: any;

  constructor(private playBackAudioService:PlayBackAudioService) {
    super();
  }

  ngOnInit() {
    this.audioList.push(environment.fireBaseUrl+this.playBackAudioService.pocast.audio)
    this.currentAudioTime = this.playBackAudioService.audioCurrentTime
    this.isAudioPlaying = this.playBackAudioService.isAudioPlaying
    this.audioPlayer.nativeElement.play();
    this.audioPlayer.nativeElement.currentTime = this.playBackAudioService.audioCurrentTime;


    this.options();
    this.initiateAudioPlayer();
    this.isAudioEnded.subscribe(data => {
      this.isAudioPlaying=false
    })
  }

  

  seekAudio(seekAudioValue: any) {
    if (this.audioVolume != 0) {
      this.isMute = false;
    }
    this.audioPlayer.nativeElement.currentTime = seekAudioValue.target.value;
    this.seekEvent.emit();
  }

  repeatAudio() {
    this.isRepeat = !this.isRepeat;
    this.repeatActive = !this.repeatActive;
    this.audioPlayer.nativeElement.loop = this.isRepeat;
    this.repeatEvent.emit();
  }


  volumeChange(volume:any) {
    this.audioPlayer.nativeElement.volume = volume.target.value / 100;
  }

  muteAudio() {
    console.log(this.isMute)
    if (this.isMute) {
      this.audioPlayer.nativeElement.volume = 0.5;
      this.isMute = false;
    } else {
      this.audioPlayer.nativeElement.volume = 0;
      this.isMute = true;
    }
  }

  initiateAudioPlayer() {
    if (this.audioList.length <= 0) {
      this.isError = true;
    } else {
      this.selectedAudio = this.audioList[this.currentAudioIndex];
    }
  }


}
