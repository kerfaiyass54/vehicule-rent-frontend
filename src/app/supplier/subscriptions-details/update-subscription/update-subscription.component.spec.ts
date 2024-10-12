import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubscriptionComponent } from './update-subscription.component';

describe('UpdateSubscriptionComponent', () => {
  let component: UpdateSubscriptionComponent;
  let fixture: ComponentFixture<UpdateSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
