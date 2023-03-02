import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSubscribersComponent } from './see-subscribers.component';

describe('SeeSubscribersComponent', () => {
  let component: SeeSubscribersComponent;
  let fixture: ComponentFixture<SeeSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeSubscribersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
