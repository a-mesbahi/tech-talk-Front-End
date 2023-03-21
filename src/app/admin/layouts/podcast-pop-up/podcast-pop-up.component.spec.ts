import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastPopUpComponent } from './podcast-pop-up.component';

describe('PodcastPopUpComponent', () => {
  let component: PodcastPopUpComponent;
  let fixture: ComponentFixture<PodcastPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
