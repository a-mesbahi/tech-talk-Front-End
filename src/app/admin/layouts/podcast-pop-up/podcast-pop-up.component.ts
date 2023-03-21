import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-podcast-pop-up',
  templateUrl: './podcast-pop-up.component.html',
  styleUrls: ['./podcast-pop-up.component.scss']
})
export class PodcastPopUpComponent implements OnInit {
  @Output() closeThePopUp = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.closeThePopUp.emit(true)
  }
}
