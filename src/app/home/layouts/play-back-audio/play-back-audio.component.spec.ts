import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayBackAudioComponent } from './play-back-audio.component';

describe('PlayBackAudioComponent', () => {
  let component: PlayBackAudioComponent;
  let fixture: ComponentFixture<PlayBackAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayBackAudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayBackAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
