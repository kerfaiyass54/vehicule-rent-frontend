import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSubscriptionComponent } from './cancel-subscription.component';

describe('CancelSubscriptionComponent', () => {
  let component: CancelSubscriptionComponent;
  let fixture: ComponentFixture<CancelSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CancelSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
