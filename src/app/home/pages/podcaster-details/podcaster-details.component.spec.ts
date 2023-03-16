import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcasterDetailsComponent } from './podcaster-details.component';

describe('PodcasterDetailsComponent', () => {
  let component: PodcasterDetailsComponent;
  let fixture: ComponentFixture<PodcasterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcasterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
