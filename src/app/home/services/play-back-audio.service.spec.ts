import { TestBed } from '@angular/core/testing';

import { PlayBackAudioService } from './play-back-audio.service';

describe('PlayBackAudioService', () => {
  let service: PlayBackAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayBackAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
