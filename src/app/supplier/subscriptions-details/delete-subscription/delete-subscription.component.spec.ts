import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubscriptionComponent } from './delete-subscription.component';

describe('DeleteSubscriptionComponent', () => {
  let component: DeleteSubscriptionComponent;
  let fixture: ComponentFixture<DeleteSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSubscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
