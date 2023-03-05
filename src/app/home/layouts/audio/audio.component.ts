import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AudioPlyerOptions } from './audioPlayer';


@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent extends AudioPlyerOptions implements OnInit {

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

  constructor() {
    super();
  }

  ngOnInit() {
    this.audioList.push(`https://storage.cloud.google.com/tech-talk-b9bba.appspot.com/`+this.audio)
    this.options();
    this.initiateAudioPlayer();
    this.isAudioEnded.subscribe(data => {
      if (!this.isRepeat && this.audioList.length > 0) {
        this.nextAudio();
      }
    })
  }

  nextAudio() {
    if (this.audioList.length - 1 != this.currentAudioIndex) {
      this.currentAudioIndex += 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
      if (this.isAudioPlaying) {
        this.play();
      }
      this.nextEvent.emit();
    }else{
      this.pause();
    }
  }

  previousAudio() {
    if (this.currentAudioIndex != 0) {
      this.currentAudioIndex -= 1;
      this.selectedAudio = this.audioList[this.currentAudioIndex];
      this.getAudioLength();
      if (this.isAudioPlaying) {
        this.play();
      }
      this.previousEvent.emit();
    }
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

/*   shuffleAudio() {
    this.isShuffle = !this.isShuffle;
    if (this.isShuffle) {
    let randomItem = Math.floor(Math.random() * this.audioList.length);
    console.log(randomItem);

    }
    this.shuffleEvent.emit();
  } */

  volumeChange(volume:any) {
    this.audioPlayer.nativeElement.volume = volume.target.value / 100;
  }

  muteAudio() {
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


