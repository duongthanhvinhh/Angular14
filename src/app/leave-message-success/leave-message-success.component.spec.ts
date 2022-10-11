import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveMessageSuccessComponent } from './leave-message-success.component';

describe('LeaveMessageSuccessComponent', () => {
  let component: LeaveMessageSuccessComponent;
  let fixture: ComponentFixture<LeaveMessageSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveMessageSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveMessageSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
