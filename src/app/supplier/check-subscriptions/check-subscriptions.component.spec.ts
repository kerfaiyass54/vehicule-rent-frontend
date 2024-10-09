import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSubscriptionsComponent } from './check-subscriptions.component';

describe('CheckSubscriptionsComponent', () => {
  let component: CheckSubscriptionsComponent;
  let fixture: ComponentFixture<CheckSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckSubscriptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
