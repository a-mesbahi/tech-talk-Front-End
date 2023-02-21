import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcatDetailsComponent } from './podcat-details.component';

describe('PodcatDetailsComponent', () => {
  let component: PodcatDetailsComponent;
  let fixture: ComponentFixture<PodcatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcatDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PodcatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
