import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastInterfaceComponent } from './podcast-interface.component';

describe('PodcastInterfaceComponent', () => {
  let component: PodcastInterfaceComponent;
  let fixture: ComponentFixture<PodcastInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcastInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
